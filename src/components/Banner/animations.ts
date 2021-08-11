import { keyframes } from 'styled-components';
import { rem } from 'polished';

export const HightlightLineSlide = keyframes`
  from {
    width: 0;
    margin-left: ${rem(-10)};
    opacity: 0;
  }
  
  to {
    width: 100%;
    margin-left: 0;
    opacity: 1;
  }
`;
