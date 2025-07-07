import { render, type RenderResult } from "@testing-library/react";
import { describe, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StandardArray from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/StandardArray";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";

describe("StandardArray", () => {
    var standardArrayRender: RenderResult;
    
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>({
                str: 15,
                dex: 14,
                con: 13,
                int: 12,
                wis: 10,
                cha: 8
            });

            const handleScores = (score: string, amount: number) => {
                setScores({
                    ...scores,
                    [score as keyof AbilityScores]: amount
                })
            };

            return (
                <StandardArray scores={scores} handleScores={handleScores} />
            )
        };

        standardArrayRender = render(<ComponentWrapper />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /standard array/i})).toBeInTheDocument();
    });

    it("allows the user to switch scores by tapping one then the one they wish to change", async () => {
        const strDiv = screen.getByText(/strength/i);
        const dexDiv = screen.getByText(/dexterity/i);

        await userEvent.click(strDiv);
        await userEvent.click(dexDiv);

        expect(screen.getByText(/dexterity: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/strength: 14/i)).toBeInTheDocument();
    });

    // it also allows drag and drop but, goddam, not finding anything reasonable to test it atm
});