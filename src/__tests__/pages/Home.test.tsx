import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('user interactions', () => {
  describe('happy paths', () => {
    test('renders user received from server when user click search button', async () => {
      render(<Home />);
      const user = userEvent.setup();

      // confirm that there is octocat in the page before user interaction.
      const initialUsername = await screen.findByText('The Octocat');
      expect(initialUsername).toBeInTheDocument();

      const searchInput = screen.getByRole('textbox', { name: /search/i });
      const searchButton = screen.getByRole('button', { name: /search/i });

      // types username that user wait to get its information.
      await user.clear(searchInput);
      await user.type(searchInput, 'yuki-yamamura');

      // clicks search button to search for username.
      await user.click(searchButton);

      // now, name is the same as which searched user has, not 'octocat'.
      const searchedUsername = await screen.findByText('Yuki Yamamura');
      expect(searchedUsername).toBeInTheDocument();
      expect(screen.queryByText('The Octocat')).not.toBeInTheDocument();
    });

    test('can execute search by clicking button or pressing Enter key either', async () => {
      render(<Home />);
      const user = userEvent.setup();

      const searchInput = screen.getByRole('textbox', { name: /search/i });

      await user.clear(searchInput);
      await user.type(searchInput, 'yuki-yamamura{Enter}');

      const searchedUsername = await screen.findByText('Yuki Yamamura');
      expect(searchedUsername).toBeInTheDocument();
    });

    test('error should disappear if use searches for existing username', async () => {
      render(<Home />);
      const user = userEvent.setup();

      const searchInput = screen.getByRole('textbox', { name: /search/i });
      const searchButton = screen.getByRole('button', { name: /search/i });

      await user.clear(searchInput);
      await user.type(searchInput, 'no-such-a-user');
      await user.click(searchButton);
      expect(await screen.findByRole('alert')).toBeInTheDocument();

      await user.clear(searchInput);
      await user.type(searchInput, 'yuki-yamamura');
      await user.click(searchButton);
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
  });

  describe('unhappy paths', () => {
    test('shows error if user searches for no existing username', async () => {
      render(<Home />);
      const user = userEvent.setup();

      const searchInput = screen.getByRole('textbox', { name: /search/i });
      const searchButton = screen.getByRole('button', { name: /search/i });

      await user.clear(searchInput);
      await user.type(searchInput, 'no-such-a-user');
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();

      await user.click(searchButton);
      const alert = await screen.findByRole('alert');
      expect(alert).toHaveTextContent(/no results/i);
    });
  });

  test('should not change anything if user searches for empty value', async () => {
    render(<Home />);
    const user = userEvent.setup();

    const searchButton = screen.getByRole('button', { name: /search/i });
    await user.click(searchButton);

    const name = await screen.findByText('The Octocat');
    await expect(screen.findByRole('alert')).rejects.toThrow();
    expect(name).toBeInTheDocument();
  });
});
