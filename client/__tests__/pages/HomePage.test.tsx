import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';

describe("HomePage", () => {
    render(<HomePage />);
    it("renders", () => {
        screen.debug();
    });

    it("renders the navigation bar", () => {
        expect(screen.getByTestId("navigation")).toBeInTheDocument();
    });

    it("displays a short desciption of the site", () => {
        expect(screen.getByTestId("home-summary")).toBeInTheDocument();
    });

    it("displays the login form, a link to register, and an option to continue anonymous", () => {
        expect(screen.getByTestId("login-form")).toBeInTheDocument();
        expect(screen.getByTestId("register-button")).toBeInTheDocument();
        expect(screen.getByTestId("anonymous-button")).toBeInTheDocument();
    });
})