import { describe, it } from "vitest";
import CharacterClass from "../../../src/components/CreateCharacterPage/CharacterClass";
import { render, screen, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("CharacterAbilityScores component", () => {
    var classComponent: RenderResult;
    beforeEach(() => {
        classComponent = render(<CharacterClass />);
    });
    
    it("renders", () => {
        expect(screen.getByText(/class/i)).toBeInTheDocument();
    });

    it("allows the user to select from a list of classes, displaying more information on select", async () => {
        const classComboBox = screen.getByRole("combobox", { name: /choose a class/i});
        await userEvent.selectOptions(classComboBox, "barbarian");

        expect(screen.getByText(/barbarian/i)).toBeInTheDocument();
        expect(screen.getByText(/a tall human tribesman strides through a blizzard/i)).toBeInTheDocument();
    });
});