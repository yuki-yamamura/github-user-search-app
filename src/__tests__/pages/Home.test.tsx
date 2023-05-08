import { screen, render } from '@testing-library/react';
import Home from '@/pages';

describe('initialization', () => {
  test('renders correct heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: 'devfinder' });

    expect(heading).toBeInTheDocument();
  });

  test('starts out light theme', () => {
    render(<Home />);

    const themeButton = screen.getByRole('button', { name: /dark/i });

    expect(themeButton).toBeInTheDocument();
  });

  test('should not start out dark theme', () => {
    render(<Home />);

    const themeButton = screen.queryByRole('button', { name: /light/i });

    expect(themeButton).not.toBeInTheDocument();
  });
});
