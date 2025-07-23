import { describe, it } from "vitest";
import CharacterFinalization from "../../../src/components/CreateCharacterPage/CharacterSheet";
import { screen } from "@testing-library/react";
import renderWithStore from "../../renderOptions/renderWithStore";
import { characterBackgrounds } from "../../seedData/characterBackgrounds";
import { characterClasses } from "../../seedData/characterClasses";
import { characterSpecies } from "../../seedData/characterSpecies";

describe("CharacterAbilityScores component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterFinalization />, { preloadedState: { newCharacter: { name: "John Test", backgroundBase: characterBackgrounds[1], characterClassBase: characterClasses[0], speciesBase: characterSpecies[0] } } });
    });
    
    it("renders with base information given", () => {        
        expect(screen.getByRole("heading", { name: /character summary/i })).toBeInTheDocument();
        expect(screen.getByText(/name: john test/i)).toBeInTheDocument();
        expect(screen.getByText(/class: barbarian/i)).toBeInTheDocument();
        expect(screen.getByText(/background: thug/i)).toBeInTheDocument();
        expect(screen.getByText(/species: human/i)).toBeInTheDocument();
    });
});