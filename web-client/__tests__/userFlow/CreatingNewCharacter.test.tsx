import { describe, expect, it, vi } from "vitest";
import App from "../../src/App"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithAll from "../renderOptions/renderWithAll";
import { characterClasses } from "../seedData/characterClasses";
import { characterBackgrounds } from "../seedData/characterBackgrounds";
import { characterSpecies } from "../seedData/characterSpecies";

vi.mock("./AuthProvider", () => ({}));

describe("Creating a new character starting from the home page", () => {
    beforeEach(() => {
        renderWithAll(<App />, { initialEntries: ["/"], preloadedState: { dmTools: { characterClassDefinitions: characterClasses, backgroundDefinitions: characterBackgrounds, speciesDefinitions: characterSpecies } } });
    });

    it("allows the user to go to the Create Character section, make a new character following all steps, and view that new character on the display page", async () => {
        // Clicking the Create Character button at home screen
        const createCharacterButton = screen.getByRole("button", {name: /create character/i});
        await userEvent.click(createCharacterButton);

        // // SignInPage and clicking the Continue without account button
        // const anonymousButton = screen.getByRole("button", {name: /continue without account/i});
        // await userEvent.click(anonymousButton);

        // Start section
        const startButton = screen.getByRole("button", { name: /start/i });
        await userEvent.click(startButton);
        
        // Class section
        const backgroundButton = screen.getByRole("button", { name: /background/i });
        const classBox = screen.getByLabelText(/select a class/i);
        await userEvent.selectOptions(classBox, "beefcake");
        await userEvent.click(backgroundButton);

        // Background section
        const speciesButton = screen.getByRole("button", { name: /species/i });
        const backgroundBox = screen.getByLabelText(/choose a background/i);    
        await userEvent.selectOptions(backgroundBox, "ahcrap");
        await userEvent.click(speciesButton);

        // Species section
        const scoreButton = screen.getByRole("button", { name: /ability scores/i });
        const speciesBox = screen.getByLabelText(/select a species/i);
        await userEvent.selectOptions(speciesBox, "hboi");
        await userEvent.click(scoreButton);

        // Ability Scores section
        const alignmentButton = screen.getByRole("button", { name: /alignment/i });
        const methodBox = screen.getByLabelText(/select the method/i);
        await userEvent.selectOptions(methodBox, "manual");
        const strInput: HTMLInputElement = screen.getByLabelText(/strength/i);
        await userEvent.clear(strInput);
        await userEvent.type(strInput, "12");
        await userEvent.tab();
        await userEvent.click(alignmentButton);

        // Alignment section
        const descriptionButton = screen.getByRole("button", { name: /description/i }); 
        const lawfulGoodOption: HTMLInputElement = screen.getByLabelText(/lawful good/i);
        await userEvent.click(lawfulGoodOption);
        await userEvent.click(descriptionButton);

        // Description section
        const finishButton = screen.getByRole("button", { name: /finish/i});
        const nameInput: HTMLInputElement = screen.getByLabelText(/name/i);
        await userEvent.type(nameInput, "John DnD");
        await userEvent.click(finishButton);

        // Arriving at display page, overview section
        expect(screen.getByRole("heading", { name: /john dnd/i })).toBeInTheDocument();
    });
});