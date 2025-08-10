import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AbilityScores, BackgroundBase, Character, CharacterClassBase, FeatEffect, LineageBase, SpeciesBase } from "../types/dmToolTypes";
import { rollStat } from "../dm-tools/stats";
import { backgroundBaseReset, classBaseReset, lineageBaseReset, speciesBaseReset } from "../dm-tools/baseResetConverters";
import type { GeneratedTraits } from "../dm-tools/traitGenerator";
import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import type { RootState } from "./store";

const initialState: Character = {
    name: "",
    alignment: "unaligned",
    characterClass: null,
    background: {
        abilityScores: ["", ""],
        features: [],
        skillProficiencies: [],
        base: {}
    },
    speciesBase: null,
    lineageBase: null,
    scores: getStandardScores(),
    physicalDescription: "",
    personality: "",
    ideals: "",
    bonds: "",
    flaws: "",
    proficiencyBonus: 0
};

export const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState,
    reducers: {
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

export const selectAllFeatEffects = (state: RootState) => {
    const featEffects: FeatEffect[] = [];
    state.selectedCharacter.background.features.forEach(feat => {
        featEffects.push(...feat.effects);
    });
    return featEffects;
};

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

export const { setName, setAlignment, setCharacterClassBase, setBackgroundBase, setSpeciesBase, setLineageBase, setScore, setScores, swapScores, setScoresToStandard, setScoresToBase, setScoresToMinimum, setScoreToRandom, setScoresToRandom, addOneToScore, subtractOneFromScore, setScoresToClassDefault, setPhysicalDescription, setPersonality, setTraits, setIdeals, setBonds, setFlaws } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;