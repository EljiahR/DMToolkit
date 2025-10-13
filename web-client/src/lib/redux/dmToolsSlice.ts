import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StartupData, StartupDataDto } from "../types/dm-tool-types/collections/startupData";
import { startupDataToBo } from "../dm-tools/dtoBoConverters";

const initialState: StartupData = {
    abilityScoreDefinitions: [],
    backgroundDefinitions: [],
    characterClassDefinitions: [],
    featDefinitions: [],
    speciesDefinitions: [],
    featEffects: [],
    schools: [],
    spells: [],
    spellEffects: []
};

export const dmToolsSlice = createSlice({
    name: "dmTools",
    initialState,
    reducers: {
        setAllFromDto: (state, action: PayloadAction<StartupDataDto>) => {
            const convertedData = startupDataToBo(action.payload);
            state = convertedData;
        }
    }
});

export const { setAllFromDto } = dmToolsSlice.actions;
export default dmToolsSlice.reducer;