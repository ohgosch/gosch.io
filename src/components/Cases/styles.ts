import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';
import Heading1 from 'visual/styles/Heading1';
import Heading2 from 'visual/styles/Heading2';
import Wrapper from 'visual/styles/Wrapper';
import Button from 'visual/styles/Button';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${rem(64)} 0;
    color: ${theme.colors.black};
    overflow: hidden;

    ${Heading1} {
    }
  `}
`;

export const Content = styled(Wrapper)`
  display: grid;
  margin-top: ${rem(64)};

  ${tabletDesktop(css`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(80)};
  `)}

  ${mobile(css`
    grid-template-columns: 1fr 0.6fr;
    grid-gap: ${rem(64)};
  `)}
`;

type ColumnProps = {
  right?: boolean;
};

export const Column = styled.div<ColumnProps>`
  display: grid;
  position: relative;
  align-items: center;
  min-height: ${rem(422)};

  ${({ right }) => css`
    ${right &&
    css`
      text-align: right;

      ${Heading2} {
        margin-top: ${rem(40)};
      }

      ${Button} {
        margin-top: ${rem(40)};
      }
    `}
  `}
`;

export const ColumnContent = styled.div`
  position: absolute;
  width: ${rem(785)};

  img {
    border-radius: ${rem(8)};
  }

  //div div {
  //  max-width: auto !important;
  //}
`;

export const Features = styled.ul`
  list-style-type: none;
  margin-top: ${rem(16)};
`;

export const Feature = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(20)};
  line-height: ${rem(28)};
  cursor: default;
`;
