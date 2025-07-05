import { describe, it } from "vitest";
import CharacterAlignment from "../../../src/components/CreateCharacterPage/CharacterAlignment";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterAlignment />);

        expect(screen.getByText(/alignment/i)).toBeInTheDocument();
    });
})