import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on the page', () => {//test case to check if the name is rendered on the page
  render(<App />); //render the App component
  const nameElement = screen.getByText(/Patricia Diniz Magalhaes/i); //get the element that contains the name using a regular expression to ignore case
  expect(nameElement).toBeInTheDocument(); //assert that the element is in the document
  
  const nameElement2 = screen.getByText(/Course: TECH2102 - Enterprise - Winter 2026 test/i); //get the element that contains the course name using a regular expression to ignore case
  expect(nameElement2).toBeInTheDocument(); //assert that the element is in the document
});
