import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getModifier, rollStat } from "../dm-tools/stats";
import { backgroundBaseReset, classBaseReset, lineageBaseReset, speciesBaseReset } from "../dm-tools/baseResetConverters";
import type { GeneratedTraits } from "../dm-tools/traitGenerator";
import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import type { RootState } from "./store";
import type { StringAndNumber, ZeroOrOne } from "../types/miscTypes";
import { generateEmptyCharacter, generateEmptyWallet } from "./initialCharacterSliceState";
import type { AbilityScoreBonusFeatEffectData, SimpleBonusFeatEffectData } from "../types/featEffectDataTypes";
import type { CharacterClassBase } from "../types/dm-tool-types/characterClass";
import type { BackgroundBase } from "../types/dm-tool-types/background";
import type { LineageBase, SpeciesBase } from "../types/dm-tool-types/species";
import type { AbilityScores } from "../types/dm-tool-types/stats";
import type { FeatEffect, Feature } from "../types/dm-tool-types/feature";
import type { Armor } from "../types/dm-tool-types/items";

const initialState = generateEmptyCharacter();

export const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState,
    reducers: {
        // Keep getting a false-positive for state not being used here
        // @ts-ignore
        setNewCharacter: (state, action: PayloadAction<{defaultClass: CharacterClassBase, defaultBackground: BackgroundBase, defaultSpecies: SpeciesBase }>) => {
            state = {
                id: "",
                name: "",
                alignment: "",
                hp: 1,
                hpRolls: [action.payload.defaultClass.hitDie],
                tempHp: 0,
                characterClass: classBaseReset(action.payload.defaultClass, ""),
                background: backgroundBaseReset(action.payload.defaultBackground, ""),
                species: speciesBaseReset(action.payload.defaultSpecies, "", ""),
                scores: getStandardScores(),
                physicalDescription: "",
                personality: "",
                ideals: "",
                bonds: "",
                flaws: "",
                proficiencyBonus: 0,
                coins: generateEmptyWallet(), 
                inventory: [],
                equippedItems: []
            }
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAlignment: (state, action: PayloadAction<string>) => {
            state.alignment = action.payload;
        },
        setCharacterClassBase: (state, action: PayloadAction<CharacterClassBase>) => {
            state.characterClass = classBaseReset(action.payload, state.characterClass.id);
        },
        setBackgroundBase: (state, action: PayloadAction<BackgroundBase>) => {
            state.background = backgroundBaseReset(action.payload, state.background.id);
        },
        setBackgroundScores: (state, action: PayloadAction<{scoreId: string, index: ZeroOrOne}>) => {
            state.background.abilityScores[action.payload.index] = action.payload.scoreId;
        },
        setSpeciesBase: (state, action: PayloadAction<SpeciesBase>) => {
            state.species = speciesBaseReset(action.payload, state.species.id, state.species.lineage.id);
        },
        setLineageBase: (state, action: PayloadAction<LineageBase>) => {
            state.species.lineage= lineageBaseReset(action.payload, state.species.lineage.id)
        },
        setScore: (state, action: PayloadAction<{scoreId: string, amount: string}>) => {
            var filteredAmount = parseInt(action.payload.amount);
            filteredAmount = filteredAmount > 20 ? 20 : filteredAmount < 1 ? 1 : filteredAmount;
            state.scores[action.payload.scoreId].amount = filteredAmount;
        },
        setScores: (state, action: PayloadAction<AbilityScores>) => {
            state.scores = action.payload;
        },
        swapScores: (state, action: PayloadAction<{scoreIdA: string, scoreIdB: string}>) => {
            const { scoreIdA, scoreIdB } = action.payload;
            [state.scores[scoreIdA].amount, state.scores[scoreIdB].amount] = [state.scores[scoreIdB].amount, state.scores[scoreIdA].amount]
        },
        setScoresToStandard: (state) => {
            state.scores.str.amount = 15;
            state.scores.dex.amount = 14;
            state.scores.con.amount = 13;
            state.scores.int.amount = 12;
            state.scores.wis.amount = 10;
            state.scores.cha.amount = 8;
        },
        setScoresToBase: (state) => {
            state.scores.str.amount = 8;
            state.scores.dex.amount = 8;
            state.scores.con.amount = 8;
            state.scores.int.amount = 8;
            state.scores.wis.amount = 8;
            state.scores.cha.amount = 8;
        },
        setScoresToMinimum: (state) => {
            state.scores.str.amount = 1;
            state.scores.dex.amount = 1;
            state.scores.con.amount = 1;
            state.scores.int.amount = 1;
            state.scores.wis.amount = 1;
            state.scores.cha.amount = 1;
        },
        setScoreToRandom: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount = rollStat();
        },
        setScoresToRandom: (state) => {
            state.scores.str.amount = rollStat();
            state.scores.dex.amount = rollStat();
            state.scores.con.amount = rollStat();
            state.scores.int.amount = rollStat();
            state.scores.wis.amount = rollStat();
            state.scores.cha.amount = rollStat();
        },
        addOneToScore: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount += 1;
        },
        subtractOneFromScore: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount -= 1;
        },
        setScoresToClassDefault: (state, action: PayloadAction<number[] | undefined>) => {
            if (state.scores == null) {
                state.scores = getStandardScores();
            }
            state.scores.str.amount = action.payload ? action.payload[0] : state.characterClass.base.defaultScoreArray[0] ?? 8;
            state.scores.dex.amount = action.payload ? action.payload[1] : state.characterClass.base.defaultScoreArray[1] ?? 8;
            state.scores.con.amount = action.payload ? action.payload[2] : state.characterClass.base.defaultScoreArray[2] ?? 8;
            state.scores.int.amount = action.payload ? action.payload[3] : state.characterClass.base.defaultScoreArray[3] ?? 8;
            state.scores.wis.amount = action.payload ? action.payload[4] : state.characterClass.base.defaultScoreArray[4] ?? 8;
            state.scores.cha.amount = action.payload ? action.payload[5] : state.characterClass.base.defaultScoreArray[5] ?? 8;
        },
        setPhysicalDescription: (state, action: PayloadAction<string>) => {
            state.physicalDescription = action.payload;
        },
        setPersonality: (state, action: PayloadAction<string>) => {
            state.personality = action.payload;
        },
        setTraits: (state, action: PayloadAction<GeneratedTraits>) => {
            state.physicalDescription = action.payload.physical;
            state.personality = action.payload.personality;
        },
        setIdeals: (state, action: PayloadAction<string>) => {
            state.ideals = action.payload;
        },
        setBonds: (state, action: PayloadAction<string>) => {
            state.bonds = action.payload;
        },
        setFlaws: (state, action: PayloadAction<string>) => {
            state.flaws = action.payload;
        }
    }
});

export const selectAllFeatures = (state: RootState) => {
    const allFeatures: Feature[] = [];
    allFeatures.concat(state.selectedCharacter.background.features);
    allFeatures.concat(state.selectedCharacter.characterClass.features);
    if (state.selectedCharacter.characterClass.subclass) {
        allFeatures.concat(state.selectedCharacter.characterClass.subclass.features);
    }
    return allFeatures;
}

export const selectAllAbilityScores = (state: RootState) => {
    return state.selectedCharacter.scores;
}

export const selectAllFeatEffects = createSelector(
    [selectAllFeatures],
    (allFeatures) => {
        const allFeatEffects: FeatEffect[] = [];
        allFeatures.forEach((feat) => allFeatEffects.concat(feat.effects));
        return allFeatEffects;
    }
)

export const selectAllAbilityScoreFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.type == "abilityScoreBonus");
    }
);

export const selectAllInitiativeBonuseFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.type == "initiativeBonus");
    }
);

export const selectAllPassPerceptionBonusFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.type == "passivePerceptionBonus");
    }
)

export const selectAllAbilityScoreFeatEffectBonuses = createSelector(
    [selectAllAbilityScoreFeatEffects],
    (allAbilityScoreEffects) => {
        const bonuses: StringAndNumber = {
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0
        };

        allAbilityScoreEffects.forEach((abilityEffect) => {
            const data = abilityEffect.data as AbilityScoreBonusFeatEffectData;
            bonuses[data.statId] += data.amount;
        });

        return bonuses;
    }
);

export const selectAllAbilityScoreModifiers = createSelector(
    [selectAllAbilityScores, selectAllAbilityScoreFeatEffectBonuses],
    (abilityScores, abilityScoreBonuses) => {
        const modifiers: StringAndNumber = {
            "str": getModifier(abilityScores["str"].amount + abilityScoreBonuses["str"]),
            "dex": getModifier(abilityScores["dex"].amount + abilityScoreBonuses["dex"]),
            "con": getModifier(abilityScores["con"].amount + abilityScoreBonuses["con"]),
            "int": getModifier(abilityScores["int"].amount + abilityScoreBonuses["int"]),
            "wis": getModifier(abilityScores["wis"].amount + abilityScoreBonuses["wis"]),
            "cha": getModifier(abilityScores["cha"].amount + abilityScoreBonuses["cha"])
        };

        return modifiers
    }
);

export const selectInitiative = createSelector(
    [selectAllInitiativeBonuseFeatEffects, selectAllAbilityScoreModifiers],
    (initiativeFeatEffects, modifiers) => {
        var initiative = modifiers["dex"];
        initiativeFeatEffects.forEach((initiativeFeatEffect) => {
            const data = initiativeFeatEffect.data as SimpleBonusFeatEffectData;
            initiative += data.amount;
        });
        return initiative;
    }
);

export const selectProficiencyBonus = (state: RootState) => {
    return state.selectedCharacter.proficiencyBonus;
}

export const selectSpeed = (state: RootState) => {
    return state.selectedCharacter.species.base.speed;
}

export const selectSize = (state: RootState) => {
    return state.selectedCharacter.species.base.size;
}

export const selectPassivePerception = createSelector(
    [selectAllPassPerceptionBonusFeatEffects, selectAllAbilityScoreModifiers, selectAllAbilityScores, selectProficiencyBonus],
    (passivePerceptionEffects, modifiers, scores, proficiencyBonus) => {
        const perceptionSkill = scores["wis"].skills.find((skill) => skill.name == "Perception");
        var passivePerception = 10 + modifiers["wis"] + (perceptionSkill && perceptionSkill.proficient ? proficiencyBonus : 0);
        passivePerceptionEffects.forEach((effect) => {
            const data = effect.data as SimpleBonusFeatEffectData;
            passivePerception += data.amount;
        });

        return passivePerception;
    }
);

export const selectHp = (state: RootState) => {
    return state.selectedCharacter.hp;
};

export const selectHpRolls = (state: RootState) => {
    return state.selectedCharacter.hpRolls;
};

export const selectHpMax = createSelector(
    [selectHpRolls, selectAllAbilityScoreModifiers],
    (hpRolls, modifiers) => {
        const hpMax = hpRolls.reduce((total, roll) => total + roll + modifiers["con"], 0);
        return hpMax > 0 ? hpMax : 1;
    }
);

export const selectInventory = (state: RootState) => {
    return state.selectedCharacter.inventory;
};

export const selectAllEquippedItems = (state: RootState) => {
    return state.selectedCharacter.equippedItems;
};

export const selectAllEquippedWeapons = createSelector(
    [selectAllEquippedItems],
    (equipment) => {
        return equipment.filter((item) => item.category == "Weapon");
    }
);

export const selectAllEquippedArmor = createSelector(
    [selectAllEquippedItems],
    (equipment) => {
        return equipment.filter((item) => "armorCategory" in item) as Armor[];
    }
);

export const selectAC = createSelector(
    [selectAllEquippedArmor, selectAllAbilityScoreModifiers],
    (armor, modifiers) => {
        var ac = 10;
        const equippedArmor = armor.find((item) => item.armorCategory != "Shield");
        if (equippedArmor) {
            ac = equippedArmor.acBase;
            ac += equippedArmor.hasDexterityCap ? Math.min(equippedArmor.dexterityCap, modifiers["dex"]) : modifiers["dex"];
        } else {
            ac += modifiers["dex"];
        };

        const shield = armor.find((item) => item.armorCategory == "Shield");
        if (shield) {
            ac += 2;
        }

        return ac;
    }
)

export const { setNewCharacter, setName, setAlignment, setCharacterClassBase, setBackgroundBase, setBackgroundScores, setSpeciesBase, setLineageBase, setScore, setScores, swapScores, setScoresToStandard, setScoresToBase, setScoresToMinimum, setScoreToRandom, setScoresToRandom, addOneToScore, subtractOneFromScore, setScoresToClassDefault, setPhysicalDescription, setPersonality, setTraits, setIdeals, setBonds, setFlaws } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;