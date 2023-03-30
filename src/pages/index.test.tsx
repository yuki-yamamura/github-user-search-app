import { screen, render } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  test('render a greeting message', async () => {
    // arrange
    render(<Home />);

    // act
    const greeting = await screen.findByText('Hello, John Doe');

    // assert
    expect(greeting).toBeInTheDocument();
  });
});
