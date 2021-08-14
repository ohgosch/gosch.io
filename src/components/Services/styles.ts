import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';

import { desktop, mobileTablet } from 'visual/medias';

export const Container = styled.section``;

export const ServicesList = styled.div`
  display: grid;
  grid-gap: ${rem(32)};
  ${desktop(css`
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${rem(64)};
  `)}
  ${mobileTablet(css`
    margin-top: ${rem(48)};
  `)}
`;

export const Service = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    padding: ${rem(16)} ${rem(24)};
    border-radius: ${rem(16)};
    box-shadow: ${rem(5)} ${rem(4)} 0px ${rgba(theme.colors.secondary, 0.55)};
    display: grid;
    grid-template-columns: ${rem(64)} auto;
    grid-gap: ${rem(16)};
  `}
`;

export const ServiceContent = styled.div``;

export const ServiceTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(32)};
  line-height: ${rem(37)};
  text-transform: uppercase;
  margin-top: ${rem(16)};
  cursor: default;
`;

export const ServiceDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(20)};
  line-height: ${rem(23)};
  margin-top: ${rem(24)};
`;
