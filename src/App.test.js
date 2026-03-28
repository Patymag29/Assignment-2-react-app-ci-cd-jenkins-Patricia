import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on the page', () => {
  render(<App />);
  
  const nameElement = screen.getByText(/Patricia Diniz Magalhaes/i);
  expect(nameElement).toBeInTheDocument();
  
  // Remova o espaço extra no final da expressão regular
  const courseElement = screen.getByText(/Course: TECH2102 - Enterprise - Winter 2026/i);
  expect(courseElement).toBeInTheDocument();
});
