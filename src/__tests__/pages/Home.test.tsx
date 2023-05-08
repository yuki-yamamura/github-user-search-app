import { screen, render } from '@testing-library/react';
import Home from '@/pages';

describe('initialization', () => {
  test('renders correct heading', () => {
    render(<Home />);

    const heading = screen.getByText('devfinder');

    expect(heading).toBeInTheDocument();
  });
});
