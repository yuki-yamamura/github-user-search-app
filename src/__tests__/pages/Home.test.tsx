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

  test("renders octocat's primary profile at first", async () => {
    render(<Home />);

    const name = await screen.findByText('The Octocat');
    const username = screen.getByText('@octocat');
    const avatar = screen.getByRole('img', { name: /avatar/i });

    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  test('renders enabled blog link to the GitHub official site', async () => {
    render(<Home />);

    const blogLink = await screen.findByRole('link', { name: /blog/i });

    expect(blogLink).toHaveTextContent('https://github.blog');
    expect(blogLink).toBeEnabled();
  });

  test('should not render twitter username since octocat has no twitter account', async () => {
    render(<Home />);

    const twitterUsername = await screen.findByLabelText(/twitter/i);

    expect(twitterUsername).toHaveTextContent(/not available/i);
  });
});
