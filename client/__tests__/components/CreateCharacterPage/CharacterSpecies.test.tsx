import { describe, it } from "vitest";
import CharacterSpecies from "../../../src/components/CreateCharacterPage/CharacterSpecies";
import { render, screen, type RenderResult } from "@testing-library/react";

describe("CharacterBackground component", () => {
    var originComponent: RenderResult;
    
    beforeEach(() => {
        originComponent = render(<CharacterSpecies />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /species/i })).toBeInTheDocument();
    });
});