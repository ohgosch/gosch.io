import Wrapper from 'visual/styles/Wrapper';
import Header from 'components/Header';

import * as S from './styles';

export const BaseTemplate = ({ children }) => {
  return (
    <S.Container>
      <Wrapper>
        <Header />
      </Wrapper>

      {children}
    </S.Container>
  );
};

export default BaseTemplate;
