import styled, { css } from 'styled-components';
import { rem, size } from 'polished';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${rem(104)};
  margin-top: ${rem(88)};
`;

export const LogoWrapper = styled.div`
  svg {
    height: ${rem(45)};
    display: block;
  }
`;

export const SocialMedias = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${rem(24)};
`;

export const Network = styled.a`
  ${({ theme }) => css`
    font-size: 0;

    svg {
      ${size(22)};

      g {
        stroke: ${theme.colors.white};
      }
    }
  `}
`;
