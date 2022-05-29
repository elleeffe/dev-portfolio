import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function EmailIcon({ className }: SvgProps) {
  return (
    <Svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </Svg>
  );
}

export default EmailIcon;

const Svg = styled.svg`
  width: 20px;
  stroke: #000;
  fill: none;
  transition: all 100ms ease;
`;
