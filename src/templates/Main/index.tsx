import Services from 'components/Services';
import BaseTemplate from 'templates/Base';
import Banner from 'components/Banner';

import * as S from './styles';

const MainTemplate = () => {
  return (
    <BaseTemplate>
      <S.Container>
        <Banner />
        <Services />
      </S.Container>
    </BaseTemplate>
  );
};

export default MainTemplate;
