import { describe, it } from "vitest";
import CharacterBackground from "../../../src/components/CreateCharacterPage/CharacterBackground";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterBackgrounds } from "../../seedData/characterBackgrounds";
import renderWithStore from "../../renderOptions/renderWithStore";

describe("CharacterBackground component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterBackground />, { preloadedState: { dmTools: { backgroundDefinitions: characterBackgrounds } } });
    })
    
    it("renders with the default background selected", () => {
        expect(screen.getByRole("heading", { name: /background/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /evangalist/i })).toBeInTheDocument();
    });

    it("changes the displayed background when setting the combobox", async () => {
        const backgroundBox = screen.getByLabelText(/choose a background/i);

        await userEvent.selectOptions(backgroundBox, characterBackgrounds[1].id);

        expect(screen.getByRole("heading", { name: /thug/i })).toBeInTheDocument();
    });
});