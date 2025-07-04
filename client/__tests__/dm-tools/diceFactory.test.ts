import { describe, it, expect } from "vitest";
import diceFactory, { type Dice } from "../../src/lib/dm-tools/diceFactory";


describe("diceFactory", () => {
    it("returns a valid Dice object", () => {
        const dice = diceFactory(1, 1);

        expect(dice.description()).toBe("1d1");
    });

    it("rolls an amount within the possible range of given dice", () => {
        const dice = diceFactory(2,6);

        const rollTotal = dice.roll();

        expect(rollTotal).toBeLessThanOrEqual(12);
        expect(rollTotal).toBeGreaterThanOrEqual(2); 
    })
})