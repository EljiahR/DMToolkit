export interface Skill {
    id: string;
    name: string;
    proficient: boolean;
    scoreId: string;
}

export interface SkillDefinitionDto {
    id: string;
    name: string;
    description: string;
}

export interface AbilityScore {
    id: string;
    name: string;
    amount: number;
    proficient: boolean;
    skills: Skill[];
}

export interface AbilityScores {
    [key: string]: AbilityScore;
    "str": AbilityScore;
    "dex": AbilityScore;
    "con": AbilityScore;
    "int": AbilityScore;
    "wis": AbilityScore;
    "cha": AbilityScore;
}

export interface SkillDto {
    id: string;
    name: string;
    proficient: boolean;
    scoreId: string;
}

export interface AbilityScoreDto {
    id: string;
    key: string;
    name: string;
    amount: number;
    proficient: boolean;
    skillIds: string[];
}
