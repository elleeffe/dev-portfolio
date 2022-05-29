import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '../icons/Error';

type InputProps = {
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
  className?: string;
  value: string;
}

function Input({
  error,
  onChange,
  placeholder,
  type,
  className,
  value,
}: InputProps) {
  return (
    <InputWrap className={className}>
      <MyInput
        value={value}
        placeholder={placeholder}
        type={type}
        error={!!error}
        onChange={(e) => onChange(e.target.value)}
      />
      {!!error && (
        <Message>
          <ErrorIcon />
          {error}
        </Message>
      )}
    </InputWrap>
  );
}

export default Input;

const InputWrap = styled.div`
  position: relative;
`;

const MyInput = styled.input<{ error?: boolean }>`
  width: 100%;
  border: none;
  background: none;
  transition: all 200ms ease;
  border-bottom: 1px solid ${(props) => props.theme.colors.offWhite};
  caret-color: ${(props) => props.theme.colors.success};
  font-family: ${(props) => props.theme.fonts.poppins};
  font-size: 15px;
  color: ${(props) => props.theme.colors.offWhite};
  padding: 7px 0px;
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.white};
    border-bottom-color: ${(props) => (props.error
    ? props.theme.colors.danger
    : props.theme.colors.success)
};
  }
`;

const Message = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.danger};
  position: absolute;
  font-weight: 400;
  bottom: -25px;
  left: 0;

  svg {
    margin-right: 3px;
    transform: translateY(3px);
  }
  @media ${(props) => props.theme.responsive.phone} {
    bottom: unset;
    top: -27px;
    font-size: 12px;

    svg {
      font-size: 14px!important;
      transform: translateY(5px);
    }
  }
`;
