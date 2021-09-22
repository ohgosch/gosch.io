import { useTranslation } from 'next-i18next';

import Heading1 from 'visual/styles/Heading1';
import Wrapper from 'visual/styles/Wrapper';

import CompassIcon from 'public/assets/img/icon/compass.svg';
import LayoutIcon from 'public/assets/img/icon/layout.svg';
import ShareIcon from 'public/assets/img/icon/share.svg';
import PenIcon from 'public/assets/img/icon/pen.svg';

import * as S from './styles';

const Services = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <S.Container id="services">
        <Heading1>{t('services.title')}</Heading1>
        <S.ServicesList>
          <S.Service>
            <div>
              <CompassIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>{t('services.discovery.title')}</S.ServiceTitle>
              <S.ServiceDescription>
                {t('services.discovery.body')}
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <LayoutIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>{t('services.development.title')}</S.ServiceTitle>
              <S.ServiceDescription>
                {t('services.development.body')}
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <PenIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>{t('services.branding.title')}</S.ServiceTitle>
              <S.ServiceDescription>
                {t('services.branding.body')}
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
          <S.Service>
            <div>
              <ShareIcon />
            </div>
            <S.ServiceContent>
              <S.ServiceTitle>
                {t('services.social-media.title')}
              </S.ServiceTitle>
              <S.ServiceDescription>
                {t('services.social-media.body')}
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.Service>
        </S.ServicesList>
      </S.Container>
    </Wrapper>
  );
};

export default Services;
