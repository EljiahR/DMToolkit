import { describe, it } from "vitest";
import CharacterAbilityScores from "../../../src/components/CreateCharacterPage/CharacterAbilityScores";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterClasses } from "../../seedData/characterClasses";
import renderWithStore from "../../renderOptions/renderWithStore";
import { characterBackgrounds } from "../../seedData/characterBackgrounds";

describe("CharacterAbilityScores component", () => {

    beforeEach(() => {
        renderWithStore(<CharacterAbilityScores />, { preloadedState: { dmTools: { characterClassDefinitions: characterClasses, backgroundDefinitions: characterBackgrounds } }});
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

    it("shows the selected bonus chosen from a selection givin by background", async () => {
        const plusTwoBox = screen.getByLabelText(/\+2/i);

        await userEvent.selectOptions(plusTwoBox, "cha");

        expect(screen.getByText(/charisma: 8 \+2/i)).toBeInTheDocument();
    });

    it("shows the selected bonus on all methods", async () => {
        const plusTwoBox = screen.getByLabelText(/\+2/i);
        const methodBox = screen.getByLabelText(/select the method/i);

        await userEvent.selectOptions(plusTwoBox, "cha");

        expect(screen.getByText(/charisma: 8 \+2/i)).toBeInTheDocument();

        await userEvent.selectOptions(methodBox, "random");
        expect(screen.getByText(/charisma: [0-9]+ \+2/i)).toBeInTheDocument();

        await userEvent.selectOptions(methodBox, "manual");
        const charismaLabel = screen.getByText(/charisma:/i);
        expect(charismaLabel.nextElementSibling?.nextElementSibling?.textContent).toBe("+2")

        await userEvent.selectOptions(methodBox, "class-default");
        expect(screen.getByText(/charisma: 8 \+2/i)).toBeInTheDocument();

        await userEvent.selectOptions(methodBox, "point");
        expect(screen.getByText(/charisma: 8 \+2/i)).toBeInTheDocument();
    })
})