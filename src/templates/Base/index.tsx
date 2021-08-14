import Wrapper from 'visual/styles/Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as S from './styles';

export const BaseTemplate = ({ children }) => {
  return (
    <S.Container>
      <Wrapper>
        <Header />
      </Wrapper>

      {children}
      <Wrapper>
        <Footer />
      </Wrapper>
    </S.Container>
  );
};

export default BaseTemplate;
