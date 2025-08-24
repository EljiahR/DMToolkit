import { describe, it } from "vitest";
import renderWithStore from "../renderOptions/renderWithStore";
import CharacterDisplay from "../../src/pages/CharacterDisplay";
import { screen } from "@testing-library/react";

describe("CharacterDisplay page", () => {
    beforeEach(() => {
        renderWithStore(<CharacterDisplay />);
    });

    it("renders", () => {
        expect(screen.getByRole("heading", { name: /name/i })).toBeInTheDocument();
    });
});