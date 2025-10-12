import { screen } from "@testing-library/react";
import { describe } from "vitest";
import ClassDefault from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ClassDefault";
import renderWithStore from "../../../renderOptions/renderWithStore";
import { characterClasses } from "../../../seedData/characterClasses";
import { standardScores } from "./defaultScores";
import { backgroundBaseReset, classBaseReset } from "../../../../src/lib/dm-tools/definitionResetConverters";
import { characterBackgrounds } from "../../../seedData/characterBackgrounds";

describe("ClassDefault", () => {
    beforeEach(() => {
        renderWithStore(<ClassDefault />, { preloadedState: { selectedCharacter: { characterClass: classBaseReset(characterClasses[0], "0"), scores: standardScores, background: backgroundBaseReset(characterBackgrounds[0], "0") }, dmTools: { characterClassDefinitions: characterClasses } } });
    });

    it("renders with the selected classes correct default", () => {
        expect(screen.getByRole("heading", { name: /class default/i })).toBeInTheDocument();
        expect(screen.getByText(/strength: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/constitution: 14/i)).toBeInTheDocument();
    });
});