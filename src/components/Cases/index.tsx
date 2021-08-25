import Image from 'next/image';

import Heading1 from 'visual/styles/Heading1';
import Heading2 from 'visual/styles/Heading2';
import Button from 'visual/styles/Button';

import * as S from './styles';

const Cases = () => {
  return (
    <S.Container id="cases">
      <Heading1>Featured case</Heading1>
      <S.Content>
        <S.Column right>
          <div>
            <Image
              src="/assets/img/clients/bap.png"
              width={132}
              height={150}
              alt="Beer Awards Platform"
            />
          </div>
          <Heading2>Site Features</Heading2>
          <S.Features>
            <S.Feature>Discovery</S.Feature>
            <S.Feature>Site Prototype</S.Feature>
            <S.Feature>Development</S.Feature>
            <S.Feature>SEO Analytics</S.Feature>
          </S.Features>
          <div>
            <Button
              as="a"
              href="https://beerawardsplatform.com/home/"
              target="_blank"
            >
              Access published
            </Button>
          </div>
        </S.Column>
        <S.Column>
          <S.ColumnContent>
            <div>
              <Image
                src="/assets/img/clients/bap-screenshot.png"
                width={2072}
                height={1218}
              />
            </div>
          </S.ColumnContent>
        </S.Column>
      </S.Content>
    </S.Container>
  );
};

export default Cases;
