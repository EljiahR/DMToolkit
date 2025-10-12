import type { BackgroundDefinition } from "../../src/lib/types/dm-tool-types/definitions/backgroundDefinition";
import { chaDef, conDef, dexDef, intDef, wisDef } from "./abilityScoreDefinitions";
import { evangalistDescription, thugDescription } from "./descriptions";
import { emptyFeat } from "./featDefinitions";

export const characterBackgrounds: BackgroundDefinition[] = [
    {
        id: "churchlurker",
        name: "Evangalist",
        description: evangalistDescription,
        abilityScoreDefinitions: [intDef, wisDef, chaDef],
        featDefinition: emptyFeat,
        skillProficiencies: []
    },
    {
        id: "ahcrap",
        name: "Thug",
        description: thugDescription,
        abilityScoreDefinitions: [dexDef, conDef, intDef],
        featDefinition: emptyFeat,
        skillProficiencies: []
    }
];