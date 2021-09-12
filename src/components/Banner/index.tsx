import { Trans } from 'react-i18next';

import Rocket from 'public/assets/img/rocket.svg';

import Wrapper from 'visual/styles/Wrapper';

import * as S from './styles';

const Banner = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Phrase>
            <Trans i18nKey="banner.text" components={{ span: <span /> }} />
          </S.Phrase>
          <S.IllustrationWrapper>
            <Rocket />
          </S.IllustrationWrapper>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
};

export default Banner;
