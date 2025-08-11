import { describe, it } from "vitest";
import CharacterSheet from "../../../src/components/CreateCharacterPage/CharacterSheet";
import { screen } from "@testing-library/react";
import renderWithStore from "../../renderOptions/renderWithStore";
import { characterBackgrounds } from "../../seedData/characterBackgrounds";
import { characterClasses } from "../../seedData/characterClasses";
import { characterSpecies } from "../../seedData/characterSpecies";
import { backgroundBaseReset, classBaseReset, speciesBaseReset } from "../../../src/lib/dm-tools/baseResetConverters";

describe("CharacterAbilityScores component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterSheet />, { preloadedState: { selectedCharacter: { name: "John Test", background: backgroundBaseReset(characterBackgrounds[1], "0"), characterClass: classBaseReset(characterClasses[0], "0"), species: speciesBaseReset(characterSpecies[0], "0", "0") } } });
    });
    
    it("renders with base information given", () => {        
        expect(screen.getByRole("heading", { name: /character summary/i })).toBeInTheDocument();
        expect(screen.getByText(/name: john test/i)).toBeInTheDocument();
        expect(screen.getByText(/class: barbarian/i)).toBeInTheDocument();
        expect(screen.getByText(/background: thug/i)).toBeInTheDocument();
        expect(screen.getByText(/species: human/i)).toBeInTheDocument();
    });
});