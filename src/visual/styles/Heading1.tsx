import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';

export const Heading1 = styled.h2`
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: default;

  ${tabletDesktop(css`
    font-size: ${rem(48)};
    line-height: ${rem(56)};
  `)}

  ${mobile(css`
    font-size: ${rem(44)};
    line-height: ${rem(52)};
  `)}
`;

export default Heading1;
