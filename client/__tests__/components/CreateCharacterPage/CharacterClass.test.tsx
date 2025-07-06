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
            const [selectedClassId, setSelectedClassId] = useState(characterClasses[0].id);
            return <CharacterClass classes={characterClasses} selectedClassId={selectedClassId} setSelectedClassId={setSelectedClassId} />
        }
        classComponent = render(<ComponentWrapper />);
    });
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /class/i })).toBeInTheDocument();
    });

    it("allows the user to select from a list of classes, displaying more information on select", async () => {
        const classComboBox = screen.getByLabelText(/select a class/i);
       
        await userEvent.selectOptions(classComboBox, characterClasses[1].id);
        
        expect(screen.getByRole("heading", { name: /wizard/i })).toBeInTheDocument();
        expect(screen.getByText(/wizards are defined by their exhaustive study/i)).toBeInTheDocument();
    });
});