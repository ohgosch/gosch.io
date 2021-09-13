import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Logo from 'public/assets/img/logo.svg';

import * as S from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Title>{t('settings.name')}</S.Title>
      <S.LogoLink href="/" title={t('header.go-home')}>
        <Logo aria-hidden />
      </S.LogoLink>
      <S.Menu>
        <Link href="#services" passHref>
          <S.MenuItem>{t('header.nav.services')}</S.MenuItem>
        </Link>
        <Link href="#cases" passHref>
          <S.MenuItem>{t('header.nav.cases')}</S.MenuItem>
        </Link>
        <Link href="#contact" passHref>
          <S.MenuItem className="highlight">
            {t('header.nav.contact')}
          </S.MenuItem>
        </Link>
      </S.Menu>
    </S.Container>
  );
};

export default Header;
