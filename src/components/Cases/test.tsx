import { render, screen } from 'utils/test-utils';

import Cases from '.';

describe('<Cases />', () => {
  it('should render correctly', () => {
    const { container } = render(<Cases />);

    expect(
      screen.getByRole('heading', { name: /Featured case/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
