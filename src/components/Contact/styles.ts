import styled, { css } from 'styled-components';
import { rem, rgba, size } from 'polished';

import {
  LoaderIconAnimation,
  LoaderSectionAnimation,
} from 'components/Contact/animations';
import { desktop, mobile, mobileTablet, tabletDesktop } from 'visual/medias';

export const Container = styled.section``;

export const Content = styled.form`
  position: relative;

  ${desktop(css`
    width: ${rem(528)};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  `)}
`;

export const InputContent = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: ${rem(16)};
  margin-bottom: ${rem(24)};

  ${tabletDesktop(css`
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${desktop(css`
    margin-top: ${rem(64)};
  `)}

    ${mobileTablet(css`
    margin-top: ${rem(48)};
  `)}
    
    ${mobile(css`
    grid-template-columns: 1fr;
  `)}
`;

export const Loading = styled.p`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: ${rgba(theme.colors.black, 0.9)};
    font-size: ${rem(20)};
    line-height: ${rem(23)};
    animation: ${LoaderSectionAnimation} 1s ease;
    //color: ${theme.colors.white};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: ${rem(16)};
    cursor: default;

    svg {
      ${size(rem(32))};
      animation: ${LoaderIconAnimation} 4s linear infinite;

      path {
        fill: ${theme.colors.white};
      }
    }
  `}
`;

export const FeedbackMessage = styled.p`
  font-size: ${rem(20)};
  line-height: ${rem(23)};
  text-align: center;
  margin-top: ${rem(46)};
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;
