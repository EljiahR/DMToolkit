import { describe, it, expect } from "vitest";
import { screen } from '@testing-library/react';
import renderWithRouter from "../renderWithRouter";
import App from "../../src/App";

describe("HomePage", () => {
    it("renders", () => {
        renderWithRouter(<App />, { initialEntries: ['/']});

        expect(screen.getByText(/this is a toolkit/i)).toBeInTheDocument();
    });
    
    it("displays the login form, a link to register, and an option to continue anonymous", () => {
        renderWithRouter(<App />, { initialEntries: ['/']});

        expect(screen.getByRole("button", {name: /sign in/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /register/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /continue without account/i})).toBeInTheDocument();
    });
})