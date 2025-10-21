import { describe, expect, it, vi } from "vitest";
import App from "../../src/App"
import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import renderWithAll from "../renderOptions/renderWithAll";
import { characterClasses } from "../seedData/characterClasses";
import { characterBackgrounds } from "../seedData/characterBackgrounds";
import { characterSpecies, lineages } from "../seedData/characterSpecies";

vi.mock("./AuthProvider", () => ({}));

describe("Routes with Navbar at '/'", () => {
    it("renders the layout component at index with HomePage and Navbar", () => {
        renderWithAll(<App />,  { initialEntries: ['/'], preloadedState: {dmTools: { characterClasses, backgrounds: characterBackgrounds, species: characterSpecies, lineages } } });
                
        expect(screen.getByText(/this is a toolkit/i)).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /home/i})).toBeInTheDocument();
    });

    // it("redirects the user to the auth page when using the navbar to go to the create a character page", async () => {
    //     renderWithAll(<App />, { initialEntries: ['/'] });

    //     const button = screen.getByRole("button", {name: /create character/i});
    //     await userEvent.click(button);

    //     expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    // });

    // it("follows the home -> signin redirect -> create a character flow when selecting the create character button in navbar", async () => {
    //     renderWithAll(<App />, { initialEntries: ['/']});

    //     // Clicking the Create Character button at home screen
    //     const createCharacterButton = screen.getByRole("button", {name: /create character/i});
    //     await userEvent.click(createCharacterButton);

    //     // Arriving at the SignInPage and clicking the Continue without account button
    //     const anonymousButton = screen.getByRole("button", {name: /continue without account/i});
    //     await userEvent.click(anonymousButton);

    //     // Arriving at the CreatePlayerCharacterPage
    //     expect(screen.getByText(/create a new player character/i)).toBeInTheDocument();
    // });
});