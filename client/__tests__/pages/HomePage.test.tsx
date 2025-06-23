import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';

describe("HomePage", () => {
    it("renders", () => {
        render(<HomePage />);

        screen.debug();
    });
    
    it("displays the login form, a link to register, and an option to continue anonymous", () => {
        render(<HomePage />);

        expect(screen.getByRole("button", {name: /sign in/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /register/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /continue without an account/i})).toBeInTheDocument();
    });
})