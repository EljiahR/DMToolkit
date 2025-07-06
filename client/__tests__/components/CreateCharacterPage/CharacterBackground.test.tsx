import { describe, it } from "vitest";
import CharacterBackground from "../../../src/components/CreateCharacterPage/CharacterBackground";
import { render, screen, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterBackgrounds } from "../../seedData/characterBackgrounds";
import { useState } from "react";

describe("CharacterBackground component", () => {
    var backgroundComponent: RenderResult;
    
    beforeEach(() => {
        const WrapperComponent = () => {
            const [selectedBackgroundId, setSelectedBackgroundId] = useState(characterBackgrounds[0].id);

            return <CharacterBackground backgrounds={characterBackgrounds} selectedBackgroundId={selectedBackgroundId} setSelectedBackgroundId={setSelectedBackgroundId} />
        };
        
        backgroundComponent = render(<WrapperComponent />);
    })
    
    it("renders with the default background selected", () => {
        expect(screen.getByRole("heading", { name: /background/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /acolyte/i })).toBeInTheDocument();
    });

    it("changes the displayed background when setting the combobox", async () => {
        const backgroundBox = screen.getByLabelText(/choose a background/i);

        await userEvent.selectOptions(backgroundBox, characterBackgrounds[1].id);

        expect(screen.getByRole("heading", { name: /criminal/i })).toBeInTheDocument();
    });
});