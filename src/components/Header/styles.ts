import styled, { css } from 'styled-components';
import { hideVisually, rem } from 'polished';

export const Container = styled.header`
  height: ${rem(104)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  ${hideVisually()}
`;

export const LogoLink = styled.a`
  display: block;

  svg {
    height: ${rem(45)};
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
`;

export const MenuItem = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: ${rem(8)} ${rem(16)};
    transition: 0.2s ease;
    cursor: pointer;
    text-decoration: none;

    :not(.highlight) {
      :after {
        content: '';
        transition: 0.2s ease;
        display: block;
        height: ${rem(1)};
        background-color: ${theme.colors.white};
        width: 0;
      }

      :hover:after {
        width: 100%;
      }
    }

    &.highlight {
      border: ${rem(2)} solid ${theme.colors.primary};
      border-radius: ${rem(18)};

      :hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.black};
      }
    }
  `}
`;
