import { describe, it } from "vitest";
import CharacterOrigin from "../../../src/components/CreateCharacterPage/CharacterOrigin";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterOrigin />);

        expect(screen.getByText(/origin/i)).toBeInTheDocument();
    });
})