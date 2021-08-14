import Heading1 from 'visual/styles/Heading1';
import Wrapper from 'visual/styles/Wrapper';

import CompassIcon from 'public/assets/img/icon/compass.svg';
import LayoutIcon from 'public/assets/img/icon/layout.svg';
import ShareIcon from 'public/assets/img/icon/share.svg';
import PenIcon from 'public/assets/img/icon/pen.svg';

import * as S from './styles';

const Services = () => {
  return (
    <Wrapper>
      <S.Container id="services">
        <Heading1>Services</Heading1>
        <S.ServicesList>
          <S.Service>
            <CompassIcon />
            <S.ServiceContent>
              <S.ServiceTitle>Discovery</S.ServiceTitle>
              <S.ServiceDescription>
                Cuidamos da descoberta do seu produto ou serviço através de
                pesquisas de mercado, estratégias de marketing antes mesmo de
                qualquer desenvolvimento.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <LayoutIcon />
            <S.ServiceContent>
              <S.ServiceTitle>Development</S.ServiceTitle>
              <S.ServiceDescription>
                Cuidamos da descoberta do seu produto ou serviço através de
                pesquisas de mercado, estratégias de marketing antes mesmo de
                qualquer desenvolvimento.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <PenIcon />
            <S.ServiceContent>
              <S.ServiceTitle>Branding</S.ServiceTitle>
              <S.ServiceDescription>
                Cuidamos da descoberta do seu produto ou serviço através de
                pesquisas de mercado, estratégias de marketing antes mesmo de
                qualquer desenvolvimento.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <ShareIcon />
            <S.ServiceContent>
              <S.ServiceTitle>Social media</S.ServiceTitle>
              <S.ServiceDescription>
                Cuidamos da descoberta do seu produto ou serviço através de
                pesquisas de mercado, estratégias de marketing antes mesmo de
                qualquer desenvolvimento.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
        </S.ServicesList>
      </S.Container>
    </Wrapper>
  );
};

export default Services;
