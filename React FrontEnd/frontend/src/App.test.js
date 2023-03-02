import { render, screen } from '@testing-library/react';
import App from './App';

test('song name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Odds and Ends/i);
  expect(linkElement).toBeInTheDocument();
});

test('original name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Original/i);
  expect(linkElement).toBeInTheDocument();
});

test('summary', () => {
  render(<App />);
  const linkElement = screen.getByText(/Song summary/i);
  expect(linkElement).toBeInTheDocument();
});
