import type { AbilityScores } from "../types/dm-tool-types/stats";

interface ScoreCosts {
    [key: number]: number
}

export const scoreCosts: ScoreCosts = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
}

export const scoreCalculator = (scores: AbilityScores) => {
    // Rules as written: 8 is min, 15 is max        
    var total = 0;
    Object.keys(scores).forEach(key => {
        total += scoreCosts[scores[key].amount];
    });

    return total;
}