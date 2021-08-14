import Services from 'components/Services';
import BaseTemplate from 'templates/Base';
import Banner from 'components/Banner';

import * as S from './styles';
import Contact from 'components/Contact';

const MainTemplate = () => {
  return (
    <BaseTemplate>
      <S.Container>
        <Banner />
        <Services />
        <Contact />
      </S.Container>
    </BaseTemplate>
  );
};

export default MainTemplate;
