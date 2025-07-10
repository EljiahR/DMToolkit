import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { barbarianScores, baseScores } from "./defaultScores";
import ClassDefault from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ClassDefault";

describe("PointBuy", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(baseScores);

            return <ClassDefault scores={scores} setScores={setScores} classDefaultScores={barbarianScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders with the selected classes correct default", () => {
        expect(screen.getByRole("heading", { name: /class default/i })).toBeInTheDocument();
        expect(screen.getByText(/strength: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/constitution: 14/i)).toBeInTheDocument();
    });
});