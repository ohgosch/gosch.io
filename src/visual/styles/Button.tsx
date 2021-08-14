import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Button = styled.button`
  ${({ theme }) => css`
    height: ${rem(40)};
    padding: 0 ${rem(24)};
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(14)};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: ${rem(4)};
  `}
`;

export default Button;
