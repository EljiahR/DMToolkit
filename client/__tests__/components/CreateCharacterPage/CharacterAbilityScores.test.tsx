import { describe, it } from "vitest";
import CharacterAbilityScores from "../../../src/components/CreateCharacterPage/CharacterAbilityScores";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterAbilityScores />);

        expect(screen.getByText(/ability scores/i)).toBeInTheDocument();
    });
})