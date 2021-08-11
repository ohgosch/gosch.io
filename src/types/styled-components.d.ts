import resolutions from 'visual/resolutions';
import colors from 'visual/colors';
import theme from 'visual/theme';
import fonts from 'visual/fonts';
import sizes from 'visual/sizes';

type Resolutions = typeof resolutions;
type Colors = typeof colors;
type Fonts = typeof fonts;
type Theme = typeof theme;
type Sizes = typeof sizes;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    resolutions: Resolutions;
    colors: Colors;
    fonts: Fonts;
    sizes: Sizes;
  }
}
