import { render, screen } from 'utils/test-utils';

import Header from '.';

describe('<Header />', () => {
  it('should render title', () => {
    const { container } = render(<Header />);

    expect(screen.getByRole('heading', { name: /Gosch/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
