import InstagramLogo from 'public/assets/img/icon/social/instagram.svg';
import LinkedinLogo from 'public/assets/img/icon/social/linkedin.svg';
import Logo from 'public/assets/img/logo.svg';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo aria-hidden />
      </S.LogoWrapper>
      <S.SocialMedias>
        <S.Network
          title="Instagram"
          target="_blank"
          href="https://instagram.com/goschbrasil"
        >
          <InstagramLogo aria-hidden />
          Instagram
        </S.Network>
        <S.Network
          title="Linked-in"
          target="_blank"
          href="https://instagram.com/goschbrasil"
        >
          <LinkedinLogo aria-hidden />
          Linked-in
        </S.Network>
      </S.SocialMedias>
    </S.Container>
  );
};

export default Footer;
