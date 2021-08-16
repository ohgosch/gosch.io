import Link from 'next/link';

import Logo from 'public/assets/img/logo.svg';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Title>Gosch</S.Title>
      <S.LogoLink href="/" title="Go home">
        <Logo aria-hidden />
      </S.LogoLink>
      <S.Menu>
        <Link href="#services" passHref>
          <S.MenuItem>Services</S.MenuItem>
        </Link>
        <Link href="#contact" passHref>
          <S.MenuItem className="highlight">Contact</S.MenuItem>
        </Link>
      </S.Menu>
    </S.Container>
  );
};

export default Header;
