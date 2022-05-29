import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function WorkIcon({ className }: SvgProps) {
  return (
    <Svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
  );
}

export default WorkIcon;

const Svg = styled.svg`
  width: 20px;
  stroke: #000;
  fill: none;
  transition: all 100ms ease;
`;
