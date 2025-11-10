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
import type { AbilityScoreAbbreviations, AbilityScoreDisplay, AllAbilityScoreDisplay } from "./types";
import type { WeaponInstance } from "../types/dm-tool-types/items/instances/weaponInstance";
import type { ArmorInstance } from "../types/dm-tool-types/items/instances/armorInstance";
import type { Spell } from "../types/dm-tool-types/entities/spell";
import { ArmorCategory } from "../types/dm-tool-types/enums/armorCategory";
import type { SubclassInstance } from "../types/dm-tool-types/instances/subclassInstance";
import { itemDefinitionTableToInstance } from "../dm-tools/instanceGenerators";
import { ScoreAbbreviations, StandardScoresArray } from "../dm-tools/staticElements";
import type { AbilityScoreDefinition } from "../types/dm-tool-types/definitions/abilityScoreDefinition";

const initialState: Character = generateEmptyCharacter();

export const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState,
    reducers: {
        setNewCharacter: (state, action: PayloadAction<{defaultScores: AbilityScoreDefinition[], defaultClass: CharacterClassDefinition, defaultBackground: BackgroundDefinition, defaultSpecies: SpeciesDefinition }>) => {
            state.id = "";
            state.name = "";
            state.alignment = "";
            state.hp = 1;
            state.tempHp = 0;
            state.characterClassInstances = [classDefinitionReset(action.payload.defaultClass, "")];
            state.backgroundInstance = backgroundDefinitionReset(action.payload.defaultBackground, "");
            state.speciesInstance = speciesDefinitionReset(action.payload.defaultSpecies, action.payload.defaultSpecies.sizes, "", "");
            state.scores = getStandardScores(action.payload.defaultScores);
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
        setCharacterClassItemSet: (state, action: PayloadAction<boolean>) => {
            if (state.characterClassInstances[0]) {
                state.characterClassInstances[0].selectedItemSet = action.payload;
            }
        },
        setBackgroundDefinition: (state, action: PayloadAction<BackgroundDefinition>) => {
            state.backgroundInstance = backgroundDefinitionReset(action.payload, state.backgroundInstance?.id ?? "");
        },
        setBackgroundScores: (state, action: PayloadAction<{scoreAbbreviation: AbilityScoreAbbreviations | "", index: ZeroOrOne}>) => {
            if (action.payload.index == 0 && state.backgroundInstance) {
                state.backgroundInstance.abilityScoreDefinitionPlusTwo = action.payload.scoreAbbreviation == "" ? null : state.scores[action.payload.scoreAbbreviation].definition;
            } else if (action.payload.index == 1 && state.backgroundInstance) {
                state.backgroundInstance.abilityScoreDefinitionPlusOne = action.payload.scoreAbbreviation == "" ? null : state.scores[action.payload.scoreAbbreviation].definition;
            }
        },
        setBackgroundItemSet: (state, action: PayloadAction<boolean>) => {
            if (state.backgroundInstance) {
                state.backgroundInstance.selectedItemSet = action.payload;
            }
        },
        setSpeciesDefinition: (state, action: PayloadAction<SpeciesDefinition>) => {
            state.speciesInstance = speciesDefinitionReset(action.payload, action.payload.sizes, state.speciesInstance?.id ?? "", state.speciesInstance?.lineageInstance?.id ?? "");
        },
        setLineageDefinition: (state, action: PayloadAction<LineageDefinition>) => {
            if (state.speciesInstance) {
                state.speciesInstance.lineageInstance = lineageDefinitionReset(action.payload, state.speciesInstance.lineageInstance?.id ?? "")
            }
        },
        setScore: (state, action: PayloadAction<{scoreAbbreviation: AbilityScoreAbbreviations, amount: string}>) => {
            let filteredAmount = parseInt(action.payload.amount);
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
        shiftStandardScores: (state, action: PayloadAction<{scoreAbbreviationA: AbilityScoreAbbreviations, scoreAbbreviationB: AbilityScoreAbbreviations}>) => {
            const {scoreAbbreviationA, scoreAbbreviationB } = action.payload;
            const initialIndex = StandardScoresArray.findIndex((num) => num == state.scores[scoreAbbreviationA].score);
            const targetIndex = StandardScoresArray.findIndex((num) => num == state.scores[scoreAbbreviationB].score);
            const wentDown = initialIndex < targetIndex;
            ScoreAbbreviations.forEach((abbreviation) => {
                if (abbreviation == scoreAbbreviationA) {
                    state.scores[abbreviation].score = StandardScoresArray[targetIndex]
                } else if (wentDown && state.scores[abbreviation].score < StandardScoresArray[initialIndex] && state.scores[abbreviation].score >= StandardScoresArray[targetIndex]) {
                    const currentIndex = StandardScoresArray.findIndex((num) => num == state.scores[abbreviation].score);
                    state.scores[abbreviation].score = StandardScoresArray[currentIndex - 1];
                } else if (!wentDown && state.scores[abbreviation].score > StandardScoresArray[initialIndex] && state.scores[abbreviation].score <= StandardScoresArray[targetIndex]) {
                    const currentIndex = StandardScoresArray.findIndex((num) => num == state.scores[abbreviation].score);
                    state.scores[abbreviation].score = StandardScoresArray[currentIndex + 1];
                }
            });
        },
        setScoresToStandard: (state) => {
            state.scores.str.score = StandardScoresArray[0];
            state.scores.dex.score = StandardScoresArray[1];
            state.scores.con.score = StandardScoresArray[2];
            state.scores.int.score = StandardScoresArray[3];
            state.scores.wis.score = StandardScoresArray[4];
            state.scores.cha.score = StandardScoresArray[5];
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
        },
        setNewCharacterInventory: (state) => {
            if (state.backgroundInstance && state.backgroundInstance.selectedItemSet) {
                state.inventory = [
                    ...state.inventory,
                    ...state.backgroundInstance.definition.itemDefinitionBaseQuantities.map(itemBase => {
                        return itemDefinitionTableToInstance(itemBase);
                })]
            }

            if (state.characterClassInstances[0] && state.characterClassInstances[0].selectedItemSet) {
                state.inventory = [
                    ...state.inventory,
                    ...state.characterClassInstances[0].definition.itemDefinitionBaseQuantities.map(itemBase => {
                        return itemDefinitionTableToInstance(itemBase);
                })]
            }
        },
        setNewCharacterId: (state) => {
            state.id = "1";
        },
        setItemEquipped: (state, action: PayloadAction<string>) => {
            const item = state.inventory.find(i => i.id == action.payload);

            if (item) {
                item.isEquipped = !item.isEquipped;
            }
        }
    }
});

export const selectBackgroundFeat = (state: RootState) => state.selectedCharacter.backgroundInstance?.featInstance ?? null;

export const selectAllCharacterClasses = (state: RootState) => state.selectedCharacter.characterClassInstances;

export const selectAllCharacterClassFeats = createSelector(
    [selectAllCharacterClasses],
    (allCharacterClasses) => {
        return allCharacterClasses.reduce((feats: FeatInstance[], c) => {
            feats.push(...c.featInstances);

            return feats;
        }, []);
    }
);

export const selectAllSubclasses = createSelector(
    [selectAllCharacterClasses],
    (allCharacterClassses) => allCharacterClassses.reduce((subclasses: SubclassInstance[], c) => {
        if (c.subclassInstance) subclasses.push(c.subclassInstance);

        return subclasses;
    }, [])
)

export const selectAllSubclassFeats = createSelector(
    [selectAllSubclasses],
    (subclasses) => subclasses.reduce((feats: FeatInstance[], subclass) => {
        feats.push(...subclass.featInstances)

        return feats;
    }, [])
)

export const selectAllFeats = createSelector(
    [selectBackgroundFeat, selectAllCharacterClassFeats, selectAllSubclassFeats],
    (backgroundFeat, characterClassFeats, subclassFeats) => {
        const feats = [];
        if (backgroundFeat) feats.push(backgroundFeat);

        feats.push(...characterClassFeats);
        feats.push(...subclassFeats);

        return feats;
    }
)

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

export const selectAbilityScoreBonusPlusTwoAbbreviation = (state: RootState) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo?.abbreviation ?? "";
export const selectAbilityScoreBonusPlusOneAbbreviation = (state: RootState) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne?.abbreviation ?? "";

export const selectAbilityScoreBackgroundBonuses = createSelector(
    [selectAbilityScoreBonusPlusTwoAbbreviation, selectAbilityScoreBonusPlusOneAbbreviation],
    (plusTwoScoreAbr, plusOneScoreAbr) => {
        return {
            "str": plusTwoScoreAbr == "str" ? 2 : plusOneScoreAbr == "str" ? 1 : 0,
            "dex": plusTwoScoreAbr == "dex" ? 2 : plusOneScoreAbr == "dex" ? 1 : 0,
            "con": plusTwoScoreAbr == "con" ? 2 : plusOneScoreAbr == "con" ? 1 : 0,
            "int": plusTwoScoreAbr == "int" ? 2 : plusOneScoreAbr == "int" ? 1 : 0,
            "wis": plusTwoScoreAbr == "wis" ? 2 : plusOneScoreAbr == "wis" ? 1 : 0,
            "cha": plusTwoScoreAbr == "cha" ? 2 : plusOneScoreAbr == "cha" ? 1 : 0
        } as StringAndNumber
    }
)

export const selectAllAbilityScoreDisplays = createSelector(
    [selectAllAbilityScores, selectAllAbilityScoreFeatEffectBonuses, selectAbilityScoreBackgroundBonuses],
    (abilityScores, abilityScoreBonuses, backgroundBonuses) => {
        const strScore = abilityScores.str.score + abilityScoreBonuses["str"] + backgroundBonuses["str"];
        const dexScore = abilityScores.dex.score + abilityScoreBonuses["dex"] + backgroundBonuses["dex"];
        const conScore = abilityScores.con.score + abilityScoreBonuses["con"] + backgroundBonuses["con"];
        const intScore = abilityScores.int.score + abilityScoreBonuses["int"] + backgroundBonuses["int"];
        const wisScore = abilityScores.wis.score + abilityScoreBonuses["wis"] + backgroundBonuses["wis"];
        const chaScore = abilityScores.cha.score + abilityScoreBonuses["cha"] + backgroundBonuses["cha"];

        const displays: AllAbilityScoreDisplay = {
            str: {
                instance: abilityScores.str,
                totalScore: strScore,
                modifier : getModifier(strScore),
                bonusFromBackground: backgroundBonuses["str"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["str"], featInstance: null}],
            },
            dex: {
                instance: abilityScores.dex,
                totalScore: dexScore,
                modifier : getModifier(dexScore),
                bonusFromBackground: backgroundBonuses["dex"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["dex"], featInstance: null}],
            },
            con: {
                instance: abilityScores.con,
                totalScore: conScore,
                modifier : getModifier(conScore),
                bonusFromBackground: backgroundBonuses["con"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["con"], featInstance: null}],
            },
            int: {
                instance: abilityScores.int,
                totalScore: intScore,
                modifier : getModifier(intScore),
                bonusFromBackground: backgroundBonuses["int"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["int"], featInstance: null}],
            },
            wis: {
                instance: abilityScores.wis,
                totalScore: wisScore,
                modifier : getModifier(wisScore),
                bonusFromBackground: backgroundBonuses["wis"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["wis"], featInstance: null}],
            },
            cha: {
                instance: abilityScores.cha,
                totalScore: chaScore,
                modifier : getModifier(chaScore),
                bonusFromBackground: backgroundBonuses["cha"],
                bonusesFromFeats: [{amount: abilityScoreBonuses["cha"], featInstance: null}],
            }
        }

        return displays;
    }
);

export const selectInitiative = createSelector(
    [selectAllInitiativeBonuseFeatEffects, selectAllAbilityScoreDisplays],
    (initiativeFeatEffects, scoreDisplays) => {
        let initiative = scoreDisplays["dex"].modifier;
        initiativeFeatEffects.forEach((initiativeFeatEffect) => {
            const data = initiativeFeatEffect.data as SimpleBonus;
            initiative += data.bonusAmount;
        });
        return initiative;
    }
);

export const selectTotalLevel = createSelector(
    [selectAllCharacterClasses],
    (characterClasses) => characterClasses.reduce((level, c) => level + c.level, 0)
);

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
    [selectAllPassPerceptionBonusFeatEffects, selectAllAbilityScoreDisplays, selectAllAbilityScores, selectProficiencyBonus],
    (passivePerceptionEffects, scoreDisplays, scores, proficiencyBonus) => {
        const perceptionSkill = scores["wis"].skillInstances.find((skill) => skill.definition.name == "Perception");
        let passivePerception = 10 + scoreDisplays["wis"].modifier + (perceptionSkill && perceptionSkill.isProficient ? proficiencyBonus : 0);
        passivePerceptionEffects.forEach((effect) => {
            const data = effect.data as SimpleBonus;
            passivePerception += data.bonusAmount;
        });

        return passivePerception;
    }
);

export const selectHp = (state: RootState) => state.selectedCharacter.hp;

export const selectHpRolls = createSelector(
    [selectAllCharacterClasses],
    (allCharacterClasses) => allCharacterClasses.reduce((hpRolls: number[], c) => {
        hpRolls.push(...c.hpRolls);

        return hpRolls;
    }, [])
);

export const selectHpMax = createSelector(
    [selectHpRolls, selectAllAbilityScoreDisplays],
    (hpRolls, scoreDisplays) => {
        const hpMax = hpRolls.reduce((total, roll) => total + roll + scoreDisplays["con"].modifier, 0);
        return hpMax > 0 ? hpMax : 1;
    }
);

export const selectInventory = (state: RootState) => {
    return state.selectedCharacter.inventory;
};

export const selectAllEquippedItems = createSelector(
    [selectInventory],
    (inventory) => inventory.filter(i => i.isEquipped)
);

export const selectAllNonEquippedItems = createSelector(
    [selectInventory],
    (inventory) => inventory.filter(i => !i.isEquipped)
);

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
    [selectAllEquippedArmor, selectAllAbilityScoreDisplays],
    (armor, scoreDisplays) => {
        let ac = 10;
        const equippedArmor = armor.find((item) => item.definition.armorCategory != ArmorCategory.Shield);
        if (equippedArmor && equippedArmor.definition.baseAC > 10) {
            ac = equippedArmor.definition.baseAC;
            ac += equippedArmor.definition.hasDexterityCap ? Math.min(equippedArmor.definition.dexterityCap, scoreDisplays["dex"].modifier) : scoreDisplays["dex"].modifier;
        } else {
            ac += scoreDisplays["dex"].modifier;
        };

        const shield = armor.find((item) => item.definition.armorCategory == ArmorCategory.Shield);
        if (shield) {
            ac += 2;
        }

        return ac;
    }
);

export const selectAllCharacterSpells = (state: RootState) => state.selectedCharacter.characterSpells;

export const selectAllSpells = createSelector(
    [selectAllCharacterSpells],
    (characterSpells) => characterSpells.map(cs => cs.spell)
);

export const selectUnpreparedSpells = createSelector(
    [selectAllCharacterSpells],
    (characterSpells) => characterSpells.reduce((spells: Spell[], cs) => {
        if (!cs.isPrepared) spells.push(cs.spell);
        
        return spells;
    }, [])
);

export const selectPreparedSpells = createSelector(
    [selectAllCharacterSpells],
    (characterSpells) => characterSpells.reduce((spells: Spell[], cs) => {
        if (cs.isPrepared) spells.push(cs.spell);
        
        return spells;
    }, [])
);

export const selectCharacterId = (state: RootState) => state.selectedCharacter.id;

export const { setNewCharacter, setName, setAlignment, setCharacterClassDefinition, setCharacterClassItemSet, setBackgroundDefinition, setBackgroundScores, setBackgroundItemSet, setSpeciesDefinition, setLineageDefinition, setScore, setScores, swapScores, shiftStandardScores, setScoresToStandard, setScoresToBase, setScoresToMinimum, setScoreToRandom, setScoresToRandom, addOneToScore, subtractOneFromScore, setScoresToClassDefault, setPhysicalDescription, setPersonality, setTraits, setIdeals, setBonds, setFlaws, setNewCharacterInventory, setNewCharacterId, setItemEquipped } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;