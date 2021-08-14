import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${rem(56)};
    padding: 0 ${rem(16)};
    background-color: transparent;
    border-radius: ${rem(4)};
    border: ${rem(2)} solid ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${rem(20)};

    ::placeholder {
      color: ${rgba(theme.colors.white, 0.7)};
    }
  `}
`;

export default Input;
