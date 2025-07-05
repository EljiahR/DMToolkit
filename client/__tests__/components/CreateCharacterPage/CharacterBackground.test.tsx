import { describe, it } from "vitest";
import CharacterBackground from "../../../src/components/CreateCharacterPage/CharacterBackground";
import { render, screen, type RenderResult } from "@testing-library/react";

describe("CharacterBackground component", () => {
    var originComponent: RenderResult;
    
    beforeEach(() => {
        originComponent = render(<CharacterBackground />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /background/i })).toBeInTheDocument();
    });
});