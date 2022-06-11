import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';
import LoaderIcon from '../icons/Loader';
import ErrorIcon from '../icons/Error';
import SuccessIcon from '../icons/Success';

function Form() {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [errorTextarea, setErrorTextarea] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState('');

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name === '') {
      setErrorName('Campo obbligatorio');
      return;
    }
    if (!checkEmail(email)) {
      return;
    }
    if (textarea === '') {
      setErrorTextarea('Campo obbligatorio');
      return;
    }
    setSubmitting(true);
    await sleep(1500);
    setSubmitting(false);
    setResponse('success');
    setTimeout(() => {
      setResponse('');
      setEmail('');
      setName('');
      setTextarea('');
    }, 2000);
    // TO DO - add sending function
    // then - redirect
    // catch - show form error
    // try {
    // } catch(e) {
    // }
  };

  const handleEmail = (value: string) => {
    setErrorEmail('');
    const regex = /^[0-9a-zA-Z@._-]+$/;
    if (!regex.test(value) && value !== '') {
      setEmail(value);
      setErrorEmail('Carattere non valido');
    }
    setEmail(value);
  };

  const checkEmail = (value: string) => {
    if (value === '') {
      setErrorEmail('Email obbligatoria');
      return false;
    }
    if (!value.includes('@') || !value.includes('.') || value.includes('@.')) {
      setErrorEmail('Email non valida');
      return false;
    }
    return true;
  };

  const handleName = (value: string) => {
    setErrorName('');
    const regex = /^[0-9a-zA-ZÀ-ú ]+$/;
    if (!regex.test(value) && value !== '') {
      setName(value);
      setErrorName('Carattere non valido');
    }
    setName(value);
  };

  const handleTextarea = (value: string) => {
    setErrorTextarea('');
    const regex = /^[0-9a-zA-ZÀ-ú()-_.,;:'?!&%$"+*£ ]+$/;
    if (!regex.test(value) && value !== '') {
      setTextarea(value);
      setErrorTextarea('Carattere non valido');
    }
    setTextarea(value);
  };

  return (
    <MyForm
      onSubmit={(e) => handleSubmit(e)}
      onFocus={() => setResponse('')}
    >
      <FlexWrap>
        <CustomInput
          type="text"
          placeholder="Nome"
          onChange={(value: string) => handleName(value)}
          error={errorName}
          value={name}
        />
        <CustomInput
          type="text"
          placeholder="Email"
          onChange={(value: string) => handleEmail(value)}
          error={errorEmail}
          value={email}
        />
        <Textarea
          placeholder="Messaggio"
          onChange={(value: string) => handleTextarea(value)}
          error={errorTextarea}
          value={textarea}
        />
      </FlexWrap>
      <ButtonWrap>
        <Button
          icon="send"
          disabled={submitting || !name || !email || !textarea}
        >
          Invia messaggio
        </Button>
        {submitting && (
          <Message>
            {' '}
            <LoaderIcon />
            Invio in corso...
          </Message>
        )}
        {response === 'failed'
          && (
            <Message error>
              <ErrorIcon />
              Ops, si è verificato un errore.
            </Message>
          )}
        {response === 'success'
          && (
            <Message success>
              <SuccessIcon />
              Messaggio inviato con successo!
            </Message>
          )}
      </ButtonWrap>
    </MyForm>
  );
}

export default Form;

const MyForm = styled.form`
  margin-top: 30px;

  @media ${(props) => props.theme.responsive.phone} {
    button {
      width: 100%;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const CustomInput = styled(Input)`
  width: 48%;
  @media ${(props) => props.theme.responsive.phone} {
    width: 100%;

    & + & {
      margin-top: 20px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Message = styled.span<{ success?: boolean; error?: boolean }>`
  font-size: 15px;
  color: ${(props) => {
    if (props.success) {
      return props.theme.colors.success;
    }
    if (props.error) {
      return props.theme.colors.danger;
    }
    return props.theme.colors.offWhite;
  }};
  font-weight: 400;
  display: inline-flex;
  align-items: center;

  svg {
    margin: 0px 5px 0px 10px;
    width: 30px;
  }

  @media ${(props) => props.theme.responsive.phone} {
    align-items: flex-start;
  }
`;
