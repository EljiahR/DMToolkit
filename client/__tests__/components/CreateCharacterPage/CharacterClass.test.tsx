import { describe, it } from "vitest";
import CharacterClass from "../../../src/components/CreateCharacterPage/CharacterClass";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterClass />);

        expect(screen.getByText(/class/i)).toBeInTheDocument();
    });
})