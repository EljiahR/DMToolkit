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
                "str": {
                    id: "str",
                    name: "Strength",
                    amount: 15,
                    bonus: 0
                },
                "dex": {
                    id: "dex",
                    name: "Dexterity",
                    amount: 14,
                    bonus: 0
                },
                "con": {
                    id: "con",
                    name: "Constitution",
                    amount: 13,
                    bonus: 0
                },
                "int": {
                    id: "int",
                    name: "Intelligence",
                    amount: 12,
                    bonus: 0
                },
                "wis": {
                    id: "wis",
                    name: "Wisdom",
                    amount: 10,
                    bonus: 0
                },
                "cha": {
                    id: "cha",
                    name: "Charisma",
                    amount: 8,
                    bonus: 0
            }});

            const handleScoreSwap = (scoreOne: string, scoreTwo: string) => {
                setScores({
                    ...scores,
                    [scoreOne as keyof AbilityScores]: {...scores[scoreOne as keyof AbilityScores], amount: scores[scoreTwo].amount},
                    [scoreTwo as keyof AbilityScores]: {...scores[scoreTwo as keyof AbilityScores], amount: scores[scoreOne].amount}
                });
            }

            return (
                <StandardArray scores={scores} handleScoreSwap={handleScoreSwap} />
            )
        };

        standardArrayRender = render(<ComponentWrapper />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /standard array/i})).toBeInTheDocument();
    });

    it("allows the user to switch scores by tapping one then the one they wish to change", async () => {
        const strDiv = screen.getByText(/strength/i);
        const chaDiv = screen.getByText(/charisma/i);

        await userEvent.click(strDiv);
        await userEvent.click(chaDiv);

        expect(screen.getByText(/charisma: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/strength: 8/i)).toBeInTheDocument();
    });

    it("allows the user to select and move scores with keyboard with either the space key or enter", async () => {
        
        await userEvent.keyboard('{tab}');
        await userEvent.keyboard('{tab}');
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{enter}');

        expect(screen.getByText(/strength: 14/i)).toBeInTheDocument();
    })

    // it also allows drag and drop but, goddam, not finding anything reasonable to test it atm
});