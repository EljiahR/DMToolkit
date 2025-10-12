import { describe, it } from "vitest";
import CharacterSpecies from "../../../src/components/CreateCharacterPage/CharacterSpecies";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterSpecies } from "../../seedData/characterSpecies";
import renderWithStore from "../../renderOptions/renderWithStore";

describe("CharacterSpecies component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterSpecies />, { preloadedState: { dmTools: { speciesDefinitions: characterSpecies } }})
    })
    
    it("renders with the default selected species showing", () => {
        expect(screen.getByRole("heading", { name: /species/i })).toBeInTheDocument();
        expect(screen.getByText(/this is you/i)).toBeInTheDocument();
    });

    it("correctly updates page when changing selected species", async () => {
        const speciesBox = screen.getByLabelText(/select a species/i);

        await userEvent.selectOptions(speciesBox, characterSpecies[1].id);

        expect(screen.getByRole("heading", { name: /wood elf/i })).toBeInTheDocument();
    })
});