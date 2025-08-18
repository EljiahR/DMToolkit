import type { AbilityScores } from "../types/dm-tool-types/character";
import diceFactory from "./diceFactory";
import { customConcat } from "./stringFunctions";

export type TraitDescription = {
    description: string;
    type: string;
}

export type ScoreTraits = {
    high: TraitDescription[];
    low: TraitDescription[];
}

export type AllScoreTraits = {
    [key: string]: ScoreTraits;
    str: ScoreTraits;
    dex: ScoreTraits;
    con: ScoreTraits;
    int: ScoreTraits;
    wis: ScoreTraits;
    cha: ScoreTraits;
}

const allScoreTraits: AllScoreTraits = {
    str: {
        high: [{description: "muscular", type: "physical"}, {description: "sinewy", type: "physical"}, {description: "protective", type: "personality"}, {description: "direct", type: "personality"}],
        low: [{description: "weak", type: "physical"}, {description: "slight", type: "physical"}, {description: "self-conscious", type: "personality"}, {description: "indirect", type: "personality"}]
    },
    dex: {
        high: [{description: "lithe", type: "physical"}, {description: "dynamic", type: "physical"}, {description: "fidgety", type: "personality"}, {description: "poised", type: "physical"}],
        low: [{description: "jittery", type: "personality"}, {description: "clumsy", type: "physical"}, {description: "hesitant", type: "personality"}, {description: "unsteady", type: "physical"}]
    },
    con: {
        high: [{description: "energetic", type: "physical"}, {description: "hale", type: "physical"}, {description: "hearty", type: "physical"}, {description: "stable", type: "physical"}],
        low: [{description: "frail", type: "physical"}, {description: "squeamish", type: "personality"}, {description: "lethargic", type: "personality"}, {description: "fragile", type: "physical"}]
    },
    int: {
        high: [{description: "decisive", type: "personality"}, {description: "logical", type: "personality"}, {description: "informative", type: "personality"}, {description: "curious", type: "personality"}],
        low: [{description: "artless", type: "personality"}, {description: "illogical", type: "personality"}, {description: "uninformed", type: "personality"}, {description: "frivolous", type: "personality"}]
    },
    wis: {
        high: [{description: "serene", type: "personality"}, {description: "considerate", type: "personality"}, {description: "attentive", type: "personality"}, {description: "wary", type: "personality"}],
        low: [{description: "rash", type: "personality"}, {description: "distracted", type: "personality"}, {description: "oblivious", type: "personality"}, {description: "naive", type: "personality"}]
    },
    cha: {
        high: [{description: "charming", type: "personality"}, {description: "commanding", type: "personality"}, {description: "hilarious", type: "personality"}, {description: "inspiring", type: "personality"}],
        low: [{description: "pedantic", type: "personality"}, {description: "humorless", type: "personality"}, {description: "reserved", type: "personality"}, {description: "tactless", type: "personality"}]
    }
}

export type GeneratedTraits = {
    physical: string;
    personality: string;
}

export default function(scores: AbilityScores, bonuses: [string, string]): GeneratedTraits {
    const d4 = diceFactory(4, 1);
    var physicalTraits: string[] = [];
    var personalityTraits: string[] = [];
    Object.keys(scores).forEach((key) => {
        const scoreTotal = scores[key].amount + (bonuses.includes(key) ?  2 - bonuses.indexOf(key) : 0);

        if (scoreTotal >= 12) {
            const newTrait = allScoreTraits[key].high[d4.roll() - 1];
            if (newTrait.type == "physical") {
                physicalTraits.push(newTrait.description);
            } else {
                personalityTraits.push(newTrait.description);
            }
        } else if (scoreTotal <= 9) {
            const newTrait = allScoreTraits[key].low[d4.roll() - 1];
            if (newTrait.type == "physical") {
                physicalTraits.push(newTrait.description);
            } else {
                personalityTraits.push(newTrait.description);
            }
        }
    });

    return {
        physical: customConcat(physicalTraits),
        personality: customConcat(personalityTraits)
    };
}