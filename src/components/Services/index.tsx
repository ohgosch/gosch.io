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
            <div>
              <CompassIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>Discovery</S.ServiceTitle>
              <S.ServiceDescription>
                Before any development, we take care of understanding and better
                defining your product with market research and marketing
                strategies.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <LayoutIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>Development</S.ServiceTitle>
              <S.ServiceDescription>
                We develop solutions custom-made for you, be it your company’s
                institutional website or your product’s complete system.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <PenIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>Branding</S.ServiceTitle>
              <S.ServiceDescription>
                We create your visual identity from scratch using persona and
                target audience studies.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <ShareIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>Social media</S.ServiceTitle>
              <S.ServiceDescription>
                We manage and create your brand’s content and communication,
                ensuring your message’s consistency.
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
        </S.ServicesList>
      </S.Container>
    </Wrapper>
  );
};

export default Services;
