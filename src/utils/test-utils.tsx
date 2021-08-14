import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';

import theme from 'visual/theme';

const customRender = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

export * from '@testing-library/react';
export { customRender as render };
