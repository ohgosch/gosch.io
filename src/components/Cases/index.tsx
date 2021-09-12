import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import Heading1 from 'visual/styles/Heading1';
import Heading2 from 'visual/styles/Heading2';
import Button from 'visual/styles/Button';

import * as S from './styles';

const Cases = () => {
  const { t } = useTranslation();
  const beerServices: string[] = t('cases.beer-awards-platform.services', {
    returnObjects: true,
  });

  return (
    <S.Container id="cases">
      <Heading1>{t('cases.title')}</Heading1>
      <S.Content>
        <S.Column right>
          <div>
            <Image
              src="/assets/img/clients/bap.png"
              width={132}
              height={150}
              alt={t('cases.beer-awards-platform.name')}
            />
          </div>
          <Heading2>{t('cases.services')}</Heading2>
          <S.Features>
            {beerServices.map((item) => (
              <S.Feature key={item}>{item}</S.Feature>
            ))}
          </S.Features>
          <div>
            <Button
              as="a"
              href="https://beerawardsplatform.com/home/"
              target="_blank"
            >
              {t('cases.access')}
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
                alt=""
              />
            </div>
          </S.ColumnContent>
        </S.Column>
      </S.Content>
    </S.Container>
  );
};

export default Cases;
