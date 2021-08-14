import styled from 'styled-components';
import { rem } from 'polished';

export const Heading1 = styled.h2`
  font-weight: bold;
  font-size: ${rem(48)};
  line-height: ${rem(56)};
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: default;
`;

export default Heading1;
