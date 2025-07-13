import { screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import PointBuy from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/PointBuy";
import userEvent from "@testing-library/user-event";
import renderWithStore from "../../../renderOptions/renderWithStore";

describe("PointBuy", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        

        pointComponent = renderWithStore(<PointBuy />);

    });

    it("renders with a default score of 8 and 27 points remaining in all categories", () => {
        expect(screen.getByRole("heading", { name: /point buy/i })).toBeInTheDocument();
        expect(screen.getByText(/strength: 8/i)).toBeInTheDocument();
        expect(screen.getByText(/points remaining: 27/i)).toBeInTheDocument();
    });

    it("allows the user to increase a stat", async () => {
        const scorePlusButtons = screen.getAllByRole("button", { name: /\+/i});

        await userEvent.click(scorePlusButtons[0]);

        expect(screen.getByText(/strength: 9/i)).toBeInTheDocument();
        expect(screen.getByText(/points remaining: 26/i)).toBeInTheDocument();
    });

    it("allows the user to decrease a stat", async () => {
        const scorePlusButtons = screen.getAllByRole("button", { name: /\+/i});
        const scoreMinusButtons = screen.getAllByRole("button", { name: /\-/i});

        await userEvent.click(scorePlusButtons[0]);
        await userEvent.click(scoreMinusButtons[0]);
        
        expect(screen.getByText(/strength: 8/i)).toBeInTheDocument();
        expect(screen.getByText(/points remaining: 27/i)).toBeInTheDocument();
    });

    it("does not allow the user to go below 8 in a stat", async () => {
        const scoreMinusButtons = screen.getAllByRole("button", { name: /\-/i});

        await userEvent.click(scoreMinusButtons[0]);
        expect(screen.getByText(/strength: 8/i)).toBeInTheDocument();
        expect(screen.getByText(/points remaining: 27/i)).toBeInTheDocument();
    });

    it("does not allow the user to go above 15 in a stat", async () => {
        const scorePlusButtons = screen.getAllByRole("button", { name: /\+/i});

        for(var i = 0; i < 8; i++)
            await userEvent.click(scorePlusButtons[0]);

        expect(screen.getByText(/strength: 15/i)).toBeInTheDocument();
    });

    it("does not allow the user to use more than the alloted 27pts", async () => {
        const scorePlusButtons = screen.getAllByRole("button", { name: /\+/i});

        for(var i = 0; i < 7; i++) {
            await userEvent.click(scorePlusButtons[0]);
            await userEvent.click(scorePlusButtons[1]);
            await userEvent.click(scorePlusButtons[2]);
        }
        await userEvent.click(scorePlusButtons[3]);

        expect(screen.getByText(/intelligence: 8/i)).toBeInTheDocument();
    });
});