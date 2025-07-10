import { describe, it } from "vitest";
import CharacterAbilityScores from "../../../src/components/CreateCharacterPage/CharacterAbilityScores";
import { render, screen, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { standardScores } from "./CharacterAbilityScoresSubComponents/defaultScores";
import { useState } from "react";

describe("CharacterAbilityScores component", () => {
    var abilityComponent: RenderResult;
    beforeEach(() => {
        const WrapperComponent = () => {
            const [scores, setScores] = useState(standardScores);
            return <CharacterAbilityScores scores={scores} setScores={setScores} />
        }
        abilityComponent = render(<WrapperComponent />);
    })
    
    it("renders with the standard array as default", () => {
        expect(screen.getByText(/ability scores/i)).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /standard array/i })).toBeInTheDocument();
    });

    it("allows the user to change which method they use to get their scores", async () => {
        const methodBox = screen.getByLabelText(/select the method/i);

        await userEvent.selectOptions(methodBox, "random");

        expect(screen.getByRole("heading", { name: /random roll/i })).toBeInTheDocument();
    });
})