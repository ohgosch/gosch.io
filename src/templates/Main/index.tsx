import Services from 'components/Services';
import BaseTemplate from 'templates/Base';
import Contact from 'components/Contact';
import Banner from 'components/Banner';
import Cases from 'components/Cases';

import * as S from './styles';

const MainTemplate = () => {
  return (
    <BaseTemplate>
      <S.Container>
        <Banner />
        <Services />
        <Cases />
        <Contact />
      </S.Container>
    </BaseTemplate>
  );
};

export default MainTemplate;
