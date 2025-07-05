import { describe, it } from "vitest";
import CharacterDescription from "../../../src/components/CreateCharacterPage/CharacterDescription";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterDescription />);

        expect(screen.getByText(/description/i)).toBeInTheDocument();
    });
})