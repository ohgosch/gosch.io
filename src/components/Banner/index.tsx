import { Trans, i18n } from 'next-i18next';

import Rocket from 'public/assets/img/rocket.svg';

import Wrapper from 'visual/styles/Wrapper';

import * as S from './styles';

const Banner = () => {
  const isPT = i18n?.language.includes('pt');

  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Phrase isPT={isPT}>
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
