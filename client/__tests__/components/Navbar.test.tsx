import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../../src/components/Navbar";
import renderWithRouter from "../renderWithRouter";

describe("Navbar", () => {
    it("renders", () => {
        renderWithRouter(<Navbar />, { initialEntries: ['/']});
        screen.debug();
        expect(screen.getByRole("button", {name: /home/i})).toBeInTheDocument();
    });
});