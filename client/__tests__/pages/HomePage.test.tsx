import { describe, it, expect } from "vitest";
import { screen } from '@testing-library/react';
import renderWithAll from "../renderOptions/renderWithAll";
import HomePage from "../../src/pages/HomePage";

describe("HomePage", () => {
    it("renders", () => {
        renderWithAll(<HomePage />, { initialEntries: ['/']});

        expect(screen.getByText(/this is a toolkit/i)).toBeInTheDocument();
    });
    
    it("displays the login form, a link to register, and an option to continue anonymous", () => {
        renderWithAll(<HomePage />, { initialEntries: ['/']});

        expect(screen.getByRole("button", {name: /sign in/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /register/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /continue without account/i})).toBeInTheDocument();
    });
})