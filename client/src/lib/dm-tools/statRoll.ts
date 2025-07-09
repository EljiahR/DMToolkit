import diceFactory from "./diceFactory";

export const rollStat = () => {
    const statPoints = [];
    const dice = diceFactory(6, 1);

    for(var i = 0; i < 3; i++)
        statPoints.push(dice.roll());

    statPoints.sort();
    statPoints.shift();

    return statPoints.reduce((total, num) => total + num, 0);
}