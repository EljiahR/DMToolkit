import type { AbilityScores } from "../../pages/CreatePlayerCharacterPage";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface NewCharacterSlice {
    scores: AbilityScores;
}