import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages';

describe('initialization', () => {
  test('renders correct heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: 'devfinder' });

    expect(heading).toBeInTheDocument();
  });

  test('starts out light theme, not dark theme', () => {
    render(<Home />);

    const darkButton = screen.getByRole('button', { name: /dark/i });
    const lightButton = screen.queryByRole('button', { name: /light/i });

    expect(darkButton).toBeInTheDocument();
    expect(lightButton).not.toBeInTheDocument();
  });

  test("renders octocat's profile at first", async () => {
    render(<Home />);

    const name = await screen.findByText('The Octocat');
    const username = screen.getByText('@octocat');
    const avatar = screen.getByRole('img', { name: /avatar/i });

    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  test('renders blog link correctly', async () => {
    render(<Home />);

    const blogLink = await screen.findByRole('link', { name: /blog/i });

    expect(blogLink).toHaveTextContent('https://github.blog');
    expect(blogLink).toBeEnabled();
  });

  test('should render "not available" for profile not being filled', async () => {
    render(<Home />);

    // octocat has no twitter account.
    const twitterUsername = await screen.findByLabelText(/twitter/i);

    expect(twitterUsername).toHaveTextContent(/not available/i);
  });
});

describe('user interactions', () => {
  describe('happy paths', () => {
    test("renders GitHub user's profile received from server after user click search button", async () => {
      render(<Home />);
      const user = userEvent.setup();

      // confirm that there is octocat's profile in the page before searching.
      const initialUsername = await screen.findByText('The Octocat');
      expect(initialUsername).toBeInTheDocument();

      const searchInput = screen.getByRole('textbox', { name: /search/i });
      const searchButton = screen.getByRole('button', { name: /search/i });

      // types username that user wait to get its information.
      await user.clear(searchInput);
      await user.type(searchInput, 'yuki-yamamura');

      // clicks search button to find the user.
      await user.click(searchButton);

      // now, name is the same as which searched user has, not "octocat".
      const searchedUsername = await screen.findByText('Yuki Yamamura');
      expect(searchedUsername).toBeInTheDocument();
      expect(screen.queryByText('The Octocat')).not.toBeInTheDocument();
    });

    test('can execute search by pressing enter key either', async () => {
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
    test('shows error if user searches for not existing username', async () => {
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
