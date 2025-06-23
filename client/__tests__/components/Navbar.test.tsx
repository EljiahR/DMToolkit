import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../../src/components/Navbar";

describe("Navbar", () => {
    it("renders", () => {
        render(<Navbar />);

        expect(screen.getByRole("button", {name: /home/i})).toBeInTheDocument();
    });
});