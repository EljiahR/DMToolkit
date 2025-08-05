export type Dice = {
    numberOfSides: number;
    numberOfDice: number;
    description: () => string;
    roll: () => number;
}

export default function(numberOfSides: number, numberOfDice: number): Dice {
    return {
        numberOfSides,
        numberOfDice,
        description: () => `${numberOfDice}d${numberOfSides}`,
        roll: () => {
            var total = 0;
            for (var i = 0; i < numberOfDice; i++) {
                total += Math.floor(Math.random() * numberOfSides) + 1;
            }
            return total;
        }
    }
};