import { getStandardScores } from "../../../../src/lib/dm-tools/abilityScoreConstructors";
import { rollStat } from "../../../../src/lib/dm-tools/statRoll";
import type { AbilityScores } from "../../../../src/lib/types/dmToolTypes";

export const standardScores: AbilityScores = getStandardScores();

export const baseScores: AbilityScores = getStandardScores([8, 8, 8, 8, 8, 8]);

export const empytyScores: AbilityScores = getStandardScores([1, 1, 1, 1, 1, 1]);

export const getRandomScore = (): AbilityScores => getStandardScores([rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()]);

export const barbarianScores: AbilityScores = getStandardScores([15, 13, 14, 10, 12, 8]);