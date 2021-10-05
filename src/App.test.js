import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument;
});

// ------------------------------------------------------
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// test("Test theme button toggle", () => {
//   render(<App />);
//   const buttonEl = screen.getByText(/Current theme/i);
    
//   userEvent.click(buttonEl);
//   expect(buttonEl).toHaveTextContent(/light/i);
// });

// ---------------------------------------------------------

// const add = (a, b) => a + b;
// test('should add two numbers', () => {
//  const sum = add(3, 4);
//  expect(sum).toBe(7);
// });