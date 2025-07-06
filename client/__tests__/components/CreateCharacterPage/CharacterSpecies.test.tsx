import { describe, it } from "vitest";
import CharacterSpecies from "../../../src/components/CreateCharacterPage/CharacterSpecies";
import { render, screen, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterSpecies, versatile, woodElf } from "../../seedData/characterSpecies";
import { useState } from "react";

describe("CharacterBackground component", () => {
    var originComponent: RenderResult;
    
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [selectedSpeciesId, setSelectedSpeciesId] = useState(characterSpecies[0].id);
            const [selectedLineageId, setSelectedLineageId] = useState(versatile.id);
            return <CharacterSpecies allSpecies={characterSpecies} allLineages={[versatile, woodElf]} selectedSpeciesId={selectedSpeciesId} setSelectedSpeciesId={setSelectedSpeciesId} selectedLineageId={selectedLineageId} setSelectedLineageId={setSelectedLineageId} />
        }
        originComponent = render(<ComponentWrapper />);
    })
    
    it("renders with the default selected species showing", () => {
        expect(screen.getByRole("heading", { name: /species/i })).toBeInTheDocument();
        expect(screen.getByText(/found throughout the multiverse/i)).toBeInTheDocument();
    });

    it("correctly updates page when changing selected species", async () => {
        const speciesBox = screen.getByLabelText(/select a species/i);

        await userEvent.selectOptions(speciesBox, characterSpecies[1].id);

        expect(screen.getByRole("heading", { name: /elf/i })).toBeInTheDocument();
    })
});