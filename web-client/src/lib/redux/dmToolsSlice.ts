import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StartupData, StartupDataDto } from "../types/dm-tool-types/collections/startupData";
import { startupDataToBo } from "../dm-tools/dtoBoConverters";
import type { RootState } from "./store";

const initialState: StartupData = {
    abilityScoreDefinitions: [],
    backgroundDefinitions: [],
    characterClassDefinitions: [],
    featDefinitions: [],
    itemDefinitionBases: [],
    speciesDefinitions: [],
    effects: [],
    schools: [],
    spells: [],
};

export const dmToolsSlice = createSlice({
    name: "dmTools",
    initialState,
    reducers: {
        setAllFromDto: (state, action: PayloadAction<StartupDataDto>) => {
            const convertedData = startupDataToBo(action.payload);
            return {...state, ...convertedData}
        }
    }
});

export const selectAllScoreDefinitions = (state: RootState) => state.dmTools.abilityScoreDefinitions;
export const selectAllCharacterClassDefinitions = (state: RootState) => state.dmTools.characterClassDefinitions;
export const selectAllBackgroundDefinitions = (state: RootState) => state.dmTools.backgroundDefinitions;
export const selectAllSpeciesDefinitions = (state: RootState) => state.dmTools.speciesDefinitions;

export const { setAllFromDto } = dmToolsSlice.actions;
export default dmToolsSlice.reducer;