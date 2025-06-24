import { describe, expect, it } from "vitest";
import renderWithRouter from "../renderWithRouter";
import App from "../../src/App"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Routes", () => {
    it("renders the layout component at index with HomePage and Navbar", () => {
        renderWithRouter(<App />, { initialEntries: ['/']});
                
        expect(screen.getByText(/this is a toolkit/i)).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /home/i})).toBeInTheDocument();
    });

    it("redirects the user to the auth page when using the navbar to go to the create a character page", async () => {
        renderWithRouter(<App />, { initialEntries: ['/']});

        const button = screen.getByRole("button", {name: /create character/i});
        await userEvent.click(button);

        expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    });
});