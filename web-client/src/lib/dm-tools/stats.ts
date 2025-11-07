import diceFactory from "./diceFactory";

export const rollStat = () => {
    const statPoints = [];
    const dice = diceFactory(6, 1);

    for(var i = 0; i < 4; i++)
        statPoints.push(dice.roll());

    statPoints.sort();
    statPoints.shift();

    return statPoints.reduce((total, num) => total + num, 0);
}

export const getModifier = (scoreTotal: number) => Math.floor(scoreTotal / 2) - 5;