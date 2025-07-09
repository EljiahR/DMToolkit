import { render, screen, type RenderResult } from "@testing-library/react";
import { describe } from "vitest";
import { useState } from "react";
import type { AbilityScores } from "../../../../src/pages/CreatePlayerCharacterPage";
import { baseScores } from "./defaultScores";
import RandomRoll from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/RandomRoll";

describe("RandomRoll", () => {
    var pointComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [scores, setScores] = useState<AbilityScores>(baseScores);

            return <RandomRoll scores={scores} setScores={setScores} />
        };

        pointComponent = render(<ComponentWrapper />);

    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /random roll/i })).toBeInTheDocument();
    });


});