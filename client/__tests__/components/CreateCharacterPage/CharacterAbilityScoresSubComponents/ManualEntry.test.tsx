import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { zeroScores } from "./defaultScores";
import ManualEntry from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/ManualEntry";

describe("ManualEntry", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(zeroScores);

            return <ManualEntry scores={scores} setScores={setScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders with a default score of 0 in all categories", () => {
        expect(screen.getByRole("heading", { name: /manual entry/i })).toBeInTheDocument();
    });


});