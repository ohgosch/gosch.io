import { render, screen } from 'utils/test-utils';

import Contact from '.';

describe('<Contact />', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />);

    expect(
      screen.getByRole('heading', { name: /Contact/i }),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Company/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Role/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i }));

    expect(container.firstChild).toMatchSnapshot();
  });
});
