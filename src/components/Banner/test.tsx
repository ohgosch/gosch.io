import { render } from 'utils/test-utils';

import Banner from '.';

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
