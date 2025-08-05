import { screen } from "@testing-library/react";
import { describe } from "vitest";
import ManualEntry from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ManualEntry";
import userEvent from "@testing-library/user-event";
import renderWithStore from "../../../renderOptions/renderWithStore";

describe("ManualEntry", () => {
    beforeEach(() => {
        renderWithStore(<ManualEntry />);
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