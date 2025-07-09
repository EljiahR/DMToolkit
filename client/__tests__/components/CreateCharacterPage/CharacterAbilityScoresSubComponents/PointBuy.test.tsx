import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import PointBuy from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/PointBuy";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { zeroScores } from "./defaultScores";

describe("PointBuy", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(zeroScores);

            return <PointBuy scores={scores} setScores={setScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders with a default score of 0 in all categories", () => {
        expect(screen.getByRole("heading", { name: /point buy/i })).toBeInTheDocument();
        expect(screen.getByText(/strength: 0/i)).toBeInTheDocument();
    });


});