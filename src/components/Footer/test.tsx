import { render, screen } from 'utils/test-utils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);

    expect(
      screen.getByRole('link', { name: /Instagram/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /Linked-in/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
