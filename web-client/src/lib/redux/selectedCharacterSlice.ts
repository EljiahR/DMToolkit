import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getModifier, rollStat } from "../dm-tools/stats";
import type { GeneratedTraits } from "../dm-tools/traitGenerator";
import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import type { RootState } from "./store";
import type { StringAndNumber, ZeroOrOne } from "../types/miscTypes";
import { generateEmptyCharacter, generateEmptyWallet } from "./initialCharacterSliceState";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { AbilityScores } from "../types/dm-tool-types/instances/abilityScoreInstance";
import type { FeatInstance } from "../types/dm-tool-types/instances/featInstance";
import type { Effect } from "../types/dm-tool-types/entities/effect";
import { DataType } from "../types/dm-tool-types/enums/dataType";
import type { AbilityScoreBonus, SimpleBonus } from "../types/dm-tool-types/entities/effectDataTypes";
import { backgroundDefinitionReset, classDefinitionReset, lineageDefinitionReset, speciesDefinitionReset } from "../dm-tools/definitionResetConverters";
import type { Character } from "../types/dm-tool-types/instances/character";
import type { AbilityScoreAbbreviations } from "./types";
import type { WeaponInstance } from "../types/dm-tool-types/items/instances/weaponInstance";
import type { ArmorInstance } from "../types/dm-tool-types/items/instances/armorInstance";
import type { Spell } from "../types/dm-tool-types/entities/spell";
import { ArmorCategory } from "../types/dm-tool-types/enums/armorCategory";

const initialState: Character = generateEmptyCharacter();

export const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState,
    reducers: {
        setNewCharacter: (state, action: PayloadAction<{defaultClass: CharacterClassDefinition, defaultBackground: BackgroundDefinition, defaultSpecies: SpeciesDefinition }>) => {
            state.id = "";
            state.name = "";
            state.alignment = "";
            state.hp = 1;
            state.tempHp = 0;
            state.characterClassInstances = [classDefinitionReset(action.payload.defaultClass, "")];
            state.backgroundInstance = backgroundDefinitionReset(action.payload.defaultBackground, "");
            state.speciesInstance = speciesDefinitionReset(action.payload.defaultSpecies, action.payload.defaultSpecies.size, "", "");
            state.scores = getStandardScores();
            state.physicalDescription = "";
            state.personality = "";
            state.ideals = "";
            state.bonds = "";
            state.flaws = "";
            state.coins = generateEmptyWallet();
            state.inventory = [];
            state.characterSpells = [];
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAlignment: (state, action: PayloadAction<string>) => {
            state.alignment = action.payload;
        },
        setCharacterClassDefinition: (state, action: PayloadAction<CharacterClassDefinition>) => {
            state.characterClassInstances = [classDefinitionReset(action.payload, state.characterClassInstances[0].id)];
        },
        setBackgroundBase: (state, action: PayloadAction<BackgroundDefinition>) => {
            state.backgroundInstance = backgroundDefinitionReset(action.payload, state.backgroundInstance?.id ?? "");
        },
        setBackgroundScores: (state, action: PayloadAction<{scoreAbbreviation: AbilityScoreAbbreviations, index: ZeroOrOne}>) => {
            if (action.payload.index == 0 && state.backgroundInstance) {
                state.backgroundInstance.abilityScoreDefinitionPlusTwo = state.scores[action.payload.scoreAbbreviation].definition;
            } else if (action.payload.index == 1 && state.backgroundInstance) {
                state.backgroundInstance.abilityScoreDefinitionPlusOne = state.scores[action.payload.scoreAbbreviation].definition;
            }
        },
        setSpeciesBase: (state, action: PayloadAction<SpeciesDefinition>) => {
            state.speciesInstance = speciesDefinitionReset(action.payload, action.payload.size, state.speciesInstance?.id ?? "", state.speciesInstance?.lineageInstance?.id ?? "");
        },
        setLineageBase: (state, action: PayloadAction<LineageDefinition>) => {
            if (state.speciesInstance) {
                state.speciesInstance.lineageInstance = lineageDefinitionReset(action.payload, state.speciesInstance.lineageInstance?.id ?? "")
            }
        },
        setScore: (state, action: PayloadAction<{scoreAbbreviation: AbilityScoreAbbreviations, amount: string}>) => {
            var filteredAmount = parseInt(action.payload.amount);
            filteredAmount = filteredAmount > 20 ? 20 : filteredAmount < 1 ? 1 : filteredAmount;
            state.scores[action.payload.scoreAbbreviation].score = filteredAmount;
        },
        setScores: (state, action: PayloadAction<AbilityScores>) => {
            state.scores = action.payload;
        },
        swapScores: (state, action: PayloadAction<{scoreAbbreviationA: AbilityScoreAbbreviations, scoreAbbreviationB: AbilityScoreAbbreviations}>) => {
            const { scoreAbbreviationA, scoreAbbreviationB } = action.payload;
            [state.scores[scoreAbbreviationA].score, state.scores[scoreAbbreviationB].score] = [state.scores[scoreAbbreviationB].score, state.scores[scoreAbbreviationA].score]
        },
        setScoresToStandard: (state) => {
            state.scores.str.score = 15;
            state.scores.dex.score = 14;
            state.scores.con.score = 13;
            state.scores.int.score = 12;
            state.scores.wis.score = 10;
            state.scores.cha.score = 8;
        },
        setScoresToBase: (state) => {
            state.scores.str.score = 8;
            state.scores.dex.score = 8;
            state.scores.con.score = 8;
            state.scores.int.score = 8;
            state.scores.wis.score = 8;
            state.scores.cha.score = 8;
        },
        setScoresToMinimum: (state) => {
            state.scores.str.score = 1;
            state.scores.dex.score = 1;
            state.scores.con.score = 1;
            state.scores.int.score = 1;
            state.scores.wis.score = 1;
            state.scores.cha.score = 1;
        },
        setScoreToRandom: (state, action: PayloadAction<AbilityScoreAbbreviations>) => {
            state.scores[action.payload].score = rollStat();
        },
        setScoresToRandom: (state) => {
            state.scores.str.score = rollStat();
            state.scores.dex.score = rollStat();
            state.scores.con.score = rollStat();
            state.scores.int.score = rollStat();
            state.scores.wis.score = rollStat();
            state.scores.cha.score = rollStat();
        },
        addOneToScore: (state, action: PayloadAction<AbilityScoreAbbreviations>) => {
            state.scores[action.payload].score += 1;
        },
        subtractOneFromScore: (state, action: PayloadAction<AbilityScoreAbbreviations>) => {
            state.scores[action.payload].score -= 1;
        },
        setScoresToClassDefault: (state, action: PayloadAction<number[] | undefined>) => {
            if (state.scores == null) {
                state.scores = getStandardScores();
            }
            state.scores.str.score = action.payload ? action.payload[0] : state.characterClassInstances[0].definition.defaultStr ?? 8;
            state.scores.dex.score = action.payload ? action.payload[1] : state.characterClassInstances[0].definition.defaultDex ?? 8;
            state.scores.con.score = action.payload ? action.payload[2] : state.characterClassInstances[0].definition.defaultCon ?? 8;
            state.scores.int.score = action.payload ? action.payload[3] : state.characterClassInstances[0].definition.defaultInt ?? 8;
            state.scores.wis.score = action.payload ? action.payload[4] : state.characterClassInstances[0].definition.defaultWis ?? 8;
            state.scores.cha.score = action.payload ? action.payload[5] : state.characterClassInstances[0].definition.defaultCha ?? 8;
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

export const selectAllFeats = (state: RootState) => {
    
    const allFeats: FeatInstance[] = [];
    if (state.selectedCharacter.backgroundInstance && state.selectedCharacter.backgroundInstance.featInstance) allFeats.concat([state.selectedCharacter.backgroundInstance.featInstance]);
    state.selectedCharacter.characterClassInstances.forEach((characterClass) => {
        allFeats.concat(characterClass.featInstances);
        if (characterClass.subclassInstance) {
            allFeats.concat(characterClass.subclassInstance.featInstances);
        }
    });
    return allFeats;
}

export const selectAllAbilityScores = (state: RootState) => {
    return state.selectedCharacter.scores;
}

export const selectAllFeatEffects = createSelector(
    [selectAllFeats],
    (allFeatures) => {
        const allFeatEffects: Effect[] = [];
        allFeatures.forEach((feat) => allFeatEffects.concat(feat.effects));
        return allFeatEffects;
    }
)

export const selectAllAbilityScoreFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.dataType == DataType.AbilityScoreBonus);
    }
);

export const selectAllInitiativeBonuseFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.dataType == DataType.InitiativeBonus);
    }
);

export const selectAllPassPerceptionBonusFeatEffects = createSelector(
    [selectAllFeatEffects],
    (allFeatEffects) => {
        return allFeatEffects.filter((featEffect) => featEffect.dataType == DataType.PassivePerceptionBonus);
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
            const data = abilityEffect.data as AbilityScoreBonus;
            bonuses[data.scoreAbbreviation] += data.bonusAmount;
        });

        return bonuses;
    }
);

export const selectAllAbilityScoreModifiers = createSelector(
    [selectAllAbilityScores, selectAllAbilityScoreFeatEffectBonuses],
    (abilityScores, abilityScoreBonuses) => {
        const modifiers: StringAndNumber = {
            "str": getModifier(abilityScores["str"].score + abilityScoreBonuses["str"]),
            "dex": getModifier(abilityScores["dex"].score + abilityScoreBonuses["dex"]),
            "con": getModifier(abilityScores["con"].score + abilityScoreBonuses["con"]),
            "int": getModifier(abilityScores["int"].score + abilityScoreBonuses["int"]),
            "wis": getModifier(abilityScores["wis"].score + abilityScoreBonuses["wis"]),
            "cha": getModifier(abilityScores["cha"].score + abilityScoreBonuses["cha"])
        };

        return modifiers
    }
);

export const selectInitiative = createSelector(
    [selectAllInitiativeBonuseFeatEffects, selectAllAbilityScoreModifiers],
    (initiativeFeatEffects, modifiers) => {
        var initiative = modifiers["dex"];
        initiativeFeatEffects.forEach((initiativeFeatEffect) => {
            const data = initiativeFeatEffect.data as SimpleBonus;
            initiative += data.bonusAmount;
        });
        return initiative;
    }
);

export const selectTotalLevel = (state: RootState) => {
    return state.selectedCharacter.characterClassInstances.reduce((currentLevel, characterClass) => {
        return currentLevel + characterClass.level;
    }, 0);
}

export const selectProficiencyBonus = createSelector(
    [selectTotalLevel],
    (totalLevel) => {
        return 2 + (totalLevel % 4);
    }
);

export const selectSpeed = (state: RootState) => {
    return state.selectedCharacter.speciesInstance?.definition.speed ?? 0;
}

export const selectSize = (state: RootState) => {
    return state.selectedCharacter.speciesInstance?.size ?? "";
}

export const selectPassivePerception = createSelector(
    [selectAllPassPerceptionBonusFeatEffects, selectAllAbilityScoreModifiers, selectAllAbilityScores, selectProficiencyBonus],
    (passivePerceptionEffects, modifiers, scores, proficiencyBonus) => {
        const perceptionSkill = scores["wis"].skillInstances.find((skill) => skill.definition.name == "Perception");
        var passivePerception = 10 + modifiers["wis"] + (perceptionSkill && perceptionSkill.isProficient ? proficiencyBonus : 0);
        passivePerceptionEffects.forEach((effect) => {
            const data = effect.data as SimpleBonus;
            passivePerception += data.bonusAmount;
        });

        return passivePerception;
    }
);

export const selectHp = (state: RootState) => {
    return state.selectedCharacter.hp;
};

export const selectHpRolls = (state: RootState) => {
    return state.selectedCharacter.characterClassInstances.reduce((rolls: number[], characterClass) => {
        rolls.push(...characterClass.hpRolls);
        
        return rolls;
    }, []);
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
    return state.selectedCharacter.inventory.filter((item) => item.isEquipped);
};

export const selectAllNonEquippedItems = (state: RootState) => {
    return state.selectedCharacter.inventory.filter((item) => !item.isEquipped);
};

export const selectAllEquippedWeapons = createSelector(
    [selectAllEquippedItems],
    (equipment) => {
        return equipment.filter((item) => item.itemType == "Weapon") as WeaponInstance[];
    }
);

export const selectAllEquippedArmor = createSelector(
    [selectAllEquippedItems],
    (equipment) => {
        return equipment.filter((item) => item.itemType == "Armor") as ArmorInstance[];
    }
);

export const selectAC = createSelector(
    [selectAllEquippedArmor, selectAllAbilityScoreModifiers],
    (armor, modifiers) => {
        var ac = 10;
        const equippedArmor = armor.find((item) => item.definition.armorCategory != ArmorCategory.Shield);
        if (equippedArmor) {
            ac = equippedArmor.definition.baseAC;
            ac += equippedArmor.definition.hasDexterityCap ? Math.min(equippedArmor.definition.dexterityCap, modifiers["dex"]) : modifiers["dex"];
        } else {
            ac += modifiers["dex"];
        };

        const shield = armor.find((item) => item.definition.armorCategory == ArmorCategory.Shield);
        if (shield) {
            ac += 2;
        }

        return ac;
    }
);

export const selectUnpreparedSpells = (state: RootState) => {
    return state.selectedCharacter.characterSpells.reduce((spells: Spell[], characterSpell) => {
        if (!characterSpell.isPrepared) {
            spells.push(characterSpell.spell);
        }

        return spells
    }, []);
}

export const selectPreparedSpells = (state: RootState) => {
    return state.selectedCharacter.characterSpells.reduce((spells: Spell[], characterSpell) => {
        if (characterSpell.isPrepared) {
            spells.push(characterSpell.spell);
        }

        return spells
    }, []);
}

export const { setNewCharacter, setName, setAlignment, setCharacterClassDefinition, setBackgroundBase, setBackgroundScores, setSpeciesBase, setLineageBase, setScore, setScores, swapScores, setScoresToStandard, setScoresToBase, setScoresToMinimum, setScoreToRandom, setScoresToRandom, addOneToScore, subtractOneFromScore, setScoresToClassDefault, setPhysicalDescription, setPersonality, setTraits, setIdeals, setBonds, setFlaws } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;