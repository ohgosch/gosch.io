import { render, screen } from 'utils/test-utils';

import Services from '.';

describe('<Services />', () => {
  it('should render correctly', function () {
    const { container } = render(<Services />);

    expect(container.firstChild).toMatchSnapshot();

    expect(
      screen.getByRole('heading', { name: /Services/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Discovery/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Development/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Branding/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Social media/i }),
    ).toBeInTheDocument();
  });
});
