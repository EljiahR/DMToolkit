import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { zeroScores } from "./defaultScores";
import ClassDefault from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ClassDefault";

describe("PointBuy", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(zeroScores);

            return <ClassDefault scores={scores} setScores={setScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /class default/i })).toBeInTheDocument();
    });


});