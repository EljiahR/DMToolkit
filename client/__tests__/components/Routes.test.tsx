import { describe, expect, it } from "vitest";
import renderWithRouter from "../renderWithRouter";
import App from "../../src/App"
import { screen } from "@testing-library/react";

describe("Routes", () => {
    it("renders the HomePage component at index", () => {
        renderWithRouter(<App />, { initialEntries: ['/']});
                
        expect(screen.getByText(/this is a toolkit/i)).toBeInTheDocument();
    })
});