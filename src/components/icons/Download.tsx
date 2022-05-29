import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function DownloadIcon({ className }: SvgProps) {
  return (
    <Svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </Svg>
  );
}

export default DownloadIcon;

const Svg = styled.svg`
  width: 20px;
  stroke: #000;
  fill: none;
  transition: all 100ms ease;
`;
