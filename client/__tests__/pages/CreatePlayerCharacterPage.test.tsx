import { describe, it } from "vitest";
import { screen } from '@testing-library/react';
import CreatePlayerCharacterPage from "../../src/pages/CreatePlayerCharacterPage";
import renderWithStore from "../renderOptions/renderWithStore";
import userEvent from "@testing-library/user-event";
import { characterClasses } from "../seedData/characterClasses";
import { characterBackgrounds } from "../seedData/characterBackgrounds";
import { characterSpecies, lineages } from "../seedData/characterSpecies";

describe("CreatePlayerCharacter page", () => {
    beforeEach(() => {
        renderWithStore(<CreatePlayerCharacterPage />, { preloadedState: {dmTools: { characterClasses, backgrounds: characterBackgrounds, species: characterSpecies, lineages: lineages } } });
    })

    it("renders", () => {
        expect(screen.getByText(/create a new player character/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /start/i})).toBeInTheDocument();
    });

    it("allows the user to follow all steps to character summary", async () => {
        // Start page
        const startButton = screen.getByRole("button", { name: /start/i });
        await userEvent.click(startButton);
        
        // Class page
        const backgroundButton = screen.getByRole("button", { name: /background/i });
        const classBox = screen.getByLabelText(/select a class/i);
        await userEvent.selectOptions(classBox, "beefcake");
        await userEvent.click(backgroundButton);

        // Background page
        const speciesButton = screen.getByRole("button", { name: /species/i });
        const backgroundBox = screen.getByLabelText(/choose a background/i);    
        await userEvent.selectOptions(backgroundBox, "ahcrap");
        await userEvent.click(speciesButton);

        // Species page
        const scoreButton = screen.getByRole("button", { name: /ability scores/i });
        const speciesBox = screen.getByLabelText(/select a species/i);
        await userEvent.selectOptions(speciesBox, "hboi");
        await userEvent.click(scoreButton);

        // Ability Scores page
        const alignmentButton = screen.getByRole("button", { name: /alignment/i });
        const methodBox = screen.getByLabelText(/select the method/i);
        await userEvent.selectOptions(methodBox, "manual");
        const strInput: HTMLInputElement = screen.getByLabelText(/strength/i);
        await userEvent.clear(strInput);
        await userEvent.type(strInput, "12");
        await userEvent.tab();
        await userEvent.click(alignmentButton);

        // Alignment page
        const descriptionButton = screen.getByRole("button", { name: /description/i }); 
        const lawfulGoodOption: HTMLInputElement = screen.getByLabelText(/lawful good/i);
        await userEvent.click(lawfulGoodOption);
        await userEvent.click(descriptionButton);

        // Description page
        const summaryButton = screen.getByRole("button", { name: /summary/i });
        const nameInput: HTMLInputElement = screen.getByLabelText(/name/i);
        const randomTraitsButton: HTMLButtonElement = screen.getByRole("button", { name: /randomize traits/i});
        await userEvent.type(nameInput, "John DnD");
        await userEvent.click(randomTraitsButton);
        await userEvent.click(summaryButton);

        // Summary page
        expect(screen.getByText(/name: john dnd/i)).toBeInTheDocument();
        expect(screen.getByText(/class: barbarian/i)).toBeInTheDocument();
        expect(screen.getByText(/background: thug/i)).toBeInTheDocument();
        expect(screen.getByText(/species: human/i)).toBeInTheDocument();
    });
});