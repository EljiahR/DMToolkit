import { describe, it } from "vitest";
import CharacterFinalization from "../../../src/components/CreateCharacterPage/CharacterFinalization";
import { render, screen } from "@testing-library/react";

describe("CharacterAbilityScores component", () => {
    it("renders", () => {
        render(<CharacterFinalization />);

        expect(screen.getByText(/finalization/i)).toBeInTheDocument();
    });
})