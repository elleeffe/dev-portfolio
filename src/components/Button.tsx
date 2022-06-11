import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import SendIcon from './icons/Send';
import DownloadIcon from './icons/Download';

type ButtonProps = PropsWithChildren<{
  icon?: 'send' | 'download';
  className?: string;
  disabled?: boolean;
  outlined?: boolean;
  href?: string;
  onClick?: (x: any) => void;
  download?: boolean;
}>

function Button({
  icon,
  children,
  className = '',
  disabled,
  outlined,
  href,
  onClick,
  download,
}: ButtonProps) {
  return (
    <MyButton
      as={href ? 'a' : undefined}
      href={href}
      className={className}
      disabled={disabled}
      outlined={outlined}
      onClick={onClick}
      download={download}
    >
      {children}
      {icon === 'send' && <SendIcon />}
      {icon === 'download' && <DownloadIcon />}
    </MyButton>
  );
}

export default Button;

const MyButton = styled.button<{ outlined?: boolean; disabled?: boolean }>`
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 0.9)};
  padding: ${(props) => (props.outlined
    ? '0'
    : '12px 20px')
};
  background: ${(props) => (props.outlined
    ? 'none'
    : `${props.theme.colors.success}`)
};
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  transition: all 200ms ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  letter-spacing: 1px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  }

  ${(props) => !props.disabled && `
    &:hover {
      box-shadow: ${props.outlined ? 'none' : '0px 5px 10px rgba(0, 0, 0, 0.2)'};
      text-decoration: none;
      opacity: 1;
      ${props.outlined && `
        color: ${props.theme.colors.success};

        svg {
          stroke: ${props.theme.colors.success};
        }
      `}
    }
  `}

  svg {
    margin-left: 10px;
    stroke: ${(props) => props.theme.colors.white};
  }

  ${(props) => props.outlined && `
    @media ${props.theme.responsive.phone} {
      font-size: 11px;

      svg {
        width: 15px;
      }
    }
  `}
`;
