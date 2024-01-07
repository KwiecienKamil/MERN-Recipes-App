import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavigationBar from "./NavigationBar";
import { BrowserRouter } from "react-router-dom";

describe('Test suits for MyComponentWithLink', () => {
    it('should match with snapshot', () => {
    render(
        <BrowserRouter>
          <NavigationBar/>
        </BrowserRouter>
      );
      const btn = screen.getByText('Login');
     expect(btn).toBeInTheDocument();
     });
    });