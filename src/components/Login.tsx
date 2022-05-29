import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleH2, TitleH5 } from '../components/Typography';
import Input from '../components/form/Input';
import EyeIcon from '../components/icons/EyeIcon';
import Button from '../components/Button';
import LoaderIcon from '../components/icons/Loader';

type LoginProps = {
  onLogin: () => void
}

function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [isText, setIsText] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '') {
      setError('Password obbligatoria');
      return;
    }
    if (password !== 'showme2021') {
      setError('Password errata');
      return;
    }
    setSubmitting(true);
    localStorage.setItem('isLogged', 'true');
    onLogin();
  };

  const handlePassword = (value: string) => {
    setError('');
    const regEx = /^[a-zA-Z0-9!£?@#$%^&*]+$/;
    if (!regEx.test(value) && value !== '') {
      setError('Carattere non valido');
    }
    setPassword(value);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TitleH2>Benvenuto</TitleH2>
      <TitleH5 green>Inserisci la password che hai ricevuto</TitleH5>
      <InputWrap>
        <ToggleInput>
          <EyeIcon
            isText={isText}
            onClick={() => setIsText(!isText)}
          />
        </ToggleInput>
        <CustomInput
          onChange={(value: string) => handlePassword(value)}
          value={password}
          type={isText ? 'text' : 'password'}
          error={error}
          placeholder="Password"
        />
      </InputWrap>
      <CustomButton
        disabled={!password}
      >
        {submitting ? <LoaderIcon /> : 'Accedi'}
      </CustomButton>
    </Form>
  );
}

export default Login;

const Form = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const ToggleInput = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: calc(50% - 15px);
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      path {
        fill: ${(props) => props.theme.colors.success}!important;
      }
    }
  }
`;

const CustomInput = styled(Input)`
  width: 350px;

  input {
    background: rgba(255,255,255,0.2)!important;
    padding: 12px 10px;
    color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.success};
    border-radius: 15px;

    &::placeholder {
      color: rgba(255,255,255,0.5)
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.colors.success};
    }
  }

  @media ${(props) => props.theme.responsive.phoneMd} {
    width: 270px;
  }
`;
const CustomButton = styled(Button)`
  margin-top: 30px;
  justify-content: center;
  width: 350px;
  border-radius: 15px;
  padding: 0;
  height: 50px;

  svg {
    margin-left: 0;
    width: 35px;
  }

  @media ${(props) => props.theme.responsive.phoneMd} {
    width: 270px;
  }
`;
