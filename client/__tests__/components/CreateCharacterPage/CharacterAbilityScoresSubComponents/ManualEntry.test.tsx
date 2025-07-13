import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { empytyScores } from "./defaultScores";
import ManualEntry from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ManualEntry";
import userEvent from "@testing-library/user-event";

describe("ManualEntry", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(empytyScores);

            return <ManualEntry scores={scores} setScores={setScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders with a default score of 1 in all categories", () => {
        expect(screen.getByRole("heading", { name: /manual entry/i })).toBeInTheDocument();
    });

    it("allows the user to input their own score", async () => {
        const strInput: HTMLInputElement = screen.getByLabelText(/strength/i);

        await userEvent.clear(strInput);
        await userEvent.type(strInput, "10");
        await userEvent.tab();

        expect(strInput.value).toBe("10");
    });

    it("does not allow the user to input an amount greater than 20", async () => {
        const strInput: HTMLInputElement = screen.getByLabelText(/strength/i);

        await userEvent.clear(strInput);
        await userEvent.type(strInput, "21");
        await userEvent.tab();

        expect(strInput.value).toBe("20");
    });

    it("does not allow the user to input an amount less than 1", async () => {
        const strInput: HTMLInputElement = screen.getByLabelText(/strength/i);

        await userEvent.clear(strInput);
        await userEvent.type(strInput, "0");
        await userEvent.tab();

        expect(strInput.value).toBe("1");
    });
});