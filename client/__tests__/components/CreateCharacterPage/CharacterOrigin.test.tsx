import { describe, it } from "vitest";
import CharacterOrigin from "../../../src/components/CreateCharacterPage/CharacterOrigin";
import { render, screen, type RenderResult } from "@testing-library/react";

describe("CharacterOrigin component", () => {
    var originComponent: RenderResult;
    
    beforeEach(() => {
        originComponent = render(<CharacterOrigin />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /origin/i })).toBeInTheDocument();
    });

    it("")
})