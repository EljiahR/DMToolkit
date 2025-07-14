import { describe } from "vitest";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe("BonusAbilityScores", () => {
    it("renders", () => {
        expect(screen.getByLabelText(/\+2/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/\+1/i)).toBeInTheDocument();
    });

    it("allows the user to change what ability score gets what bonus", async () => {
        const plusTwoBox: HTMLSelectElement = screen.getByLabelText(/\+2/i);
        const plusOneBox: HTMLSelectElement = screen.getByLabelText(/\+1/i);

        await userEvent.selectOptions(plusTwoBox, "str");
        await userEvent.selectOptions(plusOneBox, "dex");

        expect(plusTwoBox.value).toBe("str");
        expect(plusOneBox.value).toBe("dex");
    });

    it("does not allow the user to select the same score in both boxes", async () => {
        const plusTwoBox: HTMLSelectElement = screen.getByLabelText(/\+2/i);
        const plusOneBox: HTMLSelectElement = screen.getByLabelText(/\+1/i);

        await userEvent.selectOptions(plusTwoBox, "str");
        await userEvent.selectOptions(plusOneBox, "str");

        expect(plusTwoBox.value).toBe("str");
        expect(plusOneBox.value).toBe("");
    });
});