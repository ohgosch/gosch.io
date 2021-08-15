import Wrapper from 'visual/styles/Wrapper';

import Rocket from 'public/assets/img/rocket.svg';

import * as S from './styles';

const Banner = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Phrase>
            We <span className="highlight">boost businesses</span>{' '}
            <span className="smaller">through technology</span>
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
