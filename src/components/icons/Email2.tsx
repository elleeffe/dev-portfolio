import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function Email2({ className = '' }: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </Svg>
  );
}

export default Email2;

const Svg = styled.svg`
  width: 20px;
  stroke: #000;
  fill: none;
  transition: all 100ms ease;
`;
