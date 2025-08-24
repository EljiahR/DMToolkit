import { describe, it } from "vitest";
import CharacterDisplay from "../../src/pages/CharacterDisplay";
import { screen } from "@testing-library/react";
import renderWithAll from "../renderOptions/renderWithAll";
import { generateEmptyCharacter } from "../../src/lib/redux/initialCharacterSliceState";

const emptyCharacter = generateEmptyCharacter();

describe("CharacterDisplay page", () => {
    beforeEach(() => {
        renderWithAll(<CharacterDisplay />, { preloadedState: { selectedCharacter: {...emptyCharacter, name: "John Dnd"}}});
    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /john dnd/i })).toBeInTheDocument();
    });
});