import { useState } from 'react';

import LoaderIcon from 'public/assets/img/icon/loader.svg';

import Heading1 from 'visual/styles/Heading1';
import Wrapper from 'visual/styles/Wrapper';
import Button from 'visual/styles/Button';
import Input from 'visual/styles/Input';

import * as S from './styles';

const Contact = () => {
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const tryAgain = () => {
    setSubmited(false);
    setError(false);
    setSuccess(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('company', company);
    form.append('role', role);

    const init = {
      method: 'POST',
      body: form,
    };

    const req = new Request('/api/contact', init);

    try {
      setLoading(true);
      await fetch(req);
      setSuccess(true);
      setError(false);
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
    setSubmited(true);
    setLoading(false);
  };

  return (
    <Wrapper id="contact">
      <S.Container>
        <Heading1>Contact</Heading1>
        {success && (
          <S.FeedbackMessage>
            Thank you for contact us. We’ll get in touch soon.
          </S.FeedbackMessage>
        )}
        {error && (
          <S.FeedbackMessage>
            Oh, something went wrong and we were unable to receive your contact.
            <div>
              <Button onClick={tryAgain}>Try again</Button>
            </div>
          </S.FeedbackMessage>
        )}
        {!submited && (
          <S.Content onSubmit={onSubmit}>
            <S.InputContent>
              <Input
                onChange={({ target }) => setName(target.value)}
                required
                name="name"
                placeholder="Name"
                disabled={loading}
              />
              <Input
                onChange={({ target }) => setEmail(target.value)}
                required
                name="email"
                placeholder="E-mail"
                type="email"
                disabled={loading}
              />
              <Input
                onChange={({ target }) => setCompany(target.value)}
                required
                name="company"
                placeholder="Company"
                disabled={loading}
              />
              <Input
                onChange={({ target }) => setRole(target.value)}
                required
                name="role"
                placeholder="Role"
                disabled={loading}
              />
            </S.InputContent>
            <Button type="submit" disabled={loading}>
              Submit
            </Button>
            {loading && (
              <S.Loading>
                <LoaderIcon aria-hidden />
                We&apos;re submitting. Please wait!
              </S.Loading>
            )}
          </S.Content>
        )}
      </S.Container>
    </Wrapper>
  );
};

export default Contact;
