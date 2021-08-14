import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { desktop, mobile, mobileTablet, tabletDesktop } from 'visual/medias';

export const Container = styled.section``;

export const Content = styled.form`
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
