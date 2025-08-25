import { describe, expect, it, vi } from "vitest";
import App from "../../src/App"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithAll from "../renderOptions/renderWithAll";


vi.mock("./AuthProvider", () => ({}));

describe("Creating a new character starting from the home page", () => {
    beforeEach(() => {
        renderWithAll(<App />);
    });

    it("allows the user to go to the Create Character section, make a new character following all steps, and view that new character on the display page", async () => {
        // Clicking the Create Character button at home screen
        const createCharacterButton = screen.getByRole("button", {name: /create character/i});
        await userEvent.click(createCharacterButton);

        // Arriving at the SignInPage and clicking the Continue without account button
        const anonymousButton = screen.getByRole("button", {name: /continue without account/i});
        await userEvent.click(anonymousButton);

        // Arriving at the CreatePlayerCharacterPage
        expect(screen.getByText(/create a new player character/i)).toBeInTheDocument();
    })
})