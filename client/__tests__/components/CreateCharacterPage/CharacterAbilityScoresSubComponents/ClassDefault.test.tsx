import { screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import ClassDefault from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ClassDefault";
import renderWithStore from "../../../renderOptions/renderWithStore";
import { characterClasses } from "../../../seedData/characterClasses";

describe("ClassDefault", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        pointComponent = renderWithStore(<ClassDefault />, { preloadedState: { newCharacter: { characterClassBase: characterClasses[0] }, dmTools: { characterClasses } } });
    });

    it("renders with the selected classes correct default", () => {
        expect(screen.getByRole("heading", { name: /class default/i })).toBeInTheDocument();
        expect(screen.getByText(/strength: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/constitution: 14/i)).toBeInTheDocument();
    });
});