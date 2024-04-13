import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello, world!"', () => {
  render(<App />);

  const helloWorldText = screen.getByText('Hello, world!');
  expect(helloWorldText).toBeInTheDocument();
});