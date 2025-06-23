import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../src/App.tsx';

describe("testing test environment", () => {
    it("runs", () => {
        expect(1).toBe(1);
    });
    
    it("renders", () => {
        render(<App />);
        screen.debug();
    });
});