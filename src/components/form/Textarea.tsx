import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '../icons/Error';

type InputProps = {
  error?: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  value: string;
}

function Textarea({
  error,
  onChange,
  placeholder,
  className,
  value,
}: InputProps) {
  return (
    <InputWrap className={className}>
      <MyTextarea
        value={value}
        placeholder={placeholder}
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

export default Textarea;

const InputWrap = styled.div`
  position: relative;
  width: 100%;
`;

const MyTextarea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  border: none;
  background: none;
  transition: all 200ms ease;
  font-family: ${(props) => props.theme.fonts.poppins};
  border-bottom: 1px solid ${(props) => props.theme.colors.offWhite};
  caret-color: ${(props) => props.theme.colors.success};
  font-size: 15px;
  color: ${(props) => props.theme.colors.offWhite};
  padding: 7px 0px;
  height: 140px;
  margin-top: 20px;
  resize: none;
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
  font-weight: 500;
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
