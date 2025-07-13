import { screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import RandomRoll from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/RandomRoll";
import renderWithStore from "../../../renderOptions/renderWithStore";

describe("RandomRoll", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        
        pointComponent = renderWithStore(<RandomRoll />);

    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /random roll/i })).toBeInTheDocument();
    });
});