import { describe, it } from "vitest";
import CharacterClass from "../../../src/components/CreateCharacterPage/CharacterClass";
import { render, screen, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterClasses } from "../../seedData/characterClasses";
import { useState } from "react";


describe("CharacterAbilityScores component", () => {
    var classComponent: RenderResult;
    beforeEach(() => {
        const ComponentWrapper = () => {
            const [selectedClass, setSelectedClass] = useState(0);
            return <CharacterClass classes={characterClasses} selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
        }
        classComponent = render(<ComponentWrapper />);
    });
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /class/i })).toBeInTheDocument();
    });

    it("allows the user to select from a list of classes, displaying more information on select", async () => {
        const classComboBox = screen.getByLabelText(/select a class/i);
       
        await userEvent.selectOptions(classComboBox, "1");
        
        expect(screen.getByRole("heading", { name: /wizard/i })).toBeInTheDocument();
        expect(screen.getByText(/wizards are defined by their exhaustive study/i)).toBeInTheDocument();
    });
});