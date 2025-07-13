import type { AbilityScores } from "../../pages/CreatePlayerCharacterPage";
import type { BackgroundBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface NewCharacterSlice {
    backgroundBase: BackgroundBase | null;
    speciesBase: SpeciesBase | null;
    lineageBase: LineageBase | null;
    scores: AbilityScores;
}