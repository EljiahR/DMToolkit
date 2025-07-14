import { screen } from "@testing-library/react";
import { describe } from "vitest";
import RandomRoll from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/RandomRoll";
import renderWithStore from "../../../renderOptions/renderWithStore";

describe("RandomRoll", () => {
    beforeEach(() => {
        renderWithStore(<RandomRoll />);
    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /random roll/i })).toBeInTheDocument();
    });
});