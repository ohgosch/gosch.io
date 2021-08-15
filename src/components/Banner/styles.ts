import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { desktop, mobile, mobileTablet, tablet } from 'visual/medias';
import { HightlightLineSlide } from 'components/Banner/animations';

export const Container = styled.section`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: calc(100vh - ${rem(theme.sizes.headerHeight)});
    min-height: ${rem(660)};
  `}
`;

export const Phrase = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    z-index: 10;

    .smaller {
      display: block;
    }

    ${desktop(css`
      font-size: ${rem(58)};
      line-height: ${rem(88)};
      letter-spacing: 0.05em;

      .smaller {
        letter-spacing: -0.02em;
        font-size: ${rem(64)};
      }
    `)}

    ${tablet(css`
      font-size: ${rem(48)};
      line-height: ${rem(64)};
      letter-spacing: -0.04em;

      .smaller {
        letter-spacing: -0.06em;
      }
    `)}

    ${mobile(css`
      font-size: ${rem(36)};
      line-height: ${rem(48)};
      letter-spacing: -0.04em;

      .smaller {
        letter-spacing: -0.06em;
      }
    `)}

    .highlight {
      position: relative;
      display: inline-block;

      :before {
        content: '';
        width: 100%;
        background-color: ${theme.colors.primary};
        display: block;
        position: absolute;
        transform: rotate(0.5deg);
        animation: ${HightlightLineSlide} 0.5s ease;

        ${desktop(css`
          height: ${rem(6)};
          bottom: ${rem(5)};
        `)}

        ${mobileTablet(css`
          height: ${rem(4)};
          bottom: ${rem(2)};
        `)}
      }
    }
  `}
`;

export const IllustrationWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: calc(65vw);

    ${mobile(css`
      left: calc(100% - 100px);
    `)}
    svg {
      max-height: calc(100vh - ${rem(theme.sizes.headerHeight)});
      width: ${rem(500)};
    }
  `}
`;
