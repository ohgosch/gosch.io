import Input from 'visual/styles/Input';

import * as S from './styles';
import Heading1 from 'visual/styles/Heading1';
import Wrapper from 'visual/styles/Wrapper';
import Button from 'visual/styles/Button';

const Contact = () => (
  <Wrapper id="contact">
    <S.Container>
      <Heading1>Contact</Heading1>
      <S.Content>
        <S.InputContent>
          <Input required name="name" placeholder="Name" />
          <Input required name="email" placeholder="E-mail" type="email" />
          <Input required name="company" placeholder="Company" />
          <Input required name="role" placeholder="Role" />
        </S.InputContent>
        <Button>Submit</Button>
      </S.Content>
    </S.Container>
  </Wrapper>
);

export default Contact;
