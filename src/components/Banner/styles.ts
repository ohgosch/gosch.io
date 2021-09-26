import styled, { css } from 'styled-components';
import { rem } from 'polished';

import {
  desktop,
  mobile,
  mobileTablet,
  tablet,
  tabletDesktop,
} from 'visual/medias';
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

    ${tabletDesktop(css`
      min-height: ${rem(660)};
    `)}

    ${mobile(css`
      flex-direction: column;
      justify-content: center;
      gap: ${rem(24)};
    `)}
  `}
`;

type PhraseProps = {
  isPT: boolean;
};

export const Phrase = styled.p<PhraseProps>`
  ${({ theme, isPT }) => css`
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    z-index: 10;

    .smaller {
      display: block;
    }

    ${desktop(css`
      ${isPT
        ? css`
            font-size: ${rem(51)};
          `
        : css`
            font-size: ${rem(58)};
          `}
      line-height: ${rem(88)};
      letter-spacing: 0.05em;

      .smaller {
        letter-spacing: -0.02em;
        font-size: ${rem(64)};
      }
    `)}

    ${tablet(css`
      line-height: ${rem(64)};
      letter-spacing: -0.04em;
      ${isPT
        ? css`
            font-size: ${rem(42)};
          `
        : css`
            font-size: ${rem(48)};
          `}

      .smaller {
        letter-spacing: -0.06em;
        font-size: ${rem(48)};
      }
    `)}

    ${mobile(css`
      line-height: ${rem(48)};
      letter-spacing: -0.04em;
      text-align: center;

      .smaller {
        letter-spacing: -0.06em;
        font-size: ${rem(32)};
      }

      ${isPT
        ? css`
            font-size: ${rem(24)};

            .smaller {
              font-size: ${rem(27)};
            }
          `
        : css`
            font-size: ${rem(32)};
          `}
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
        pointer-events: none;

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
    ${tabletDesktop(css`
      position: absolute;
      left: calc(65vw);
    `)}

    ${mobile(css`
      @media (max-height: ${rem(590)}) {
        display: none;
      }
    `)}

    svg {
      ${tabletDesktop(css`
        max-height: calc(100vh - ${rem(theme.sizes.headerHeight)});
        width: ${rem(500)};
      `)}
      ${mobile(css`
        width: 90%;
      `)}
    }
  `}
`;
