import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function SendIcon({ className }: SvgProps) {
  return (
    <Svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </Svg>
  );
}

export default SendIcon;

const Svg = styled.svg`
  fill: none;
  width: 15px;
  transition: all 100ms ease;
  stroke: #000;
  transform: rotate(90deg);
`;
