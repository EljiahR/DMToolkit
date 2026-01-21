import type { Character, CharacterDto } from "../instances/character";

export interface DMUser {
    id: string | null;
    username: string | null;
    characters: Character[];
}

export interface DMUserDto {
    id: string | null;
    username: string | null;
    characters: CharacterDto[];
}