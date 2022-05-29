import React from 'react';
import styled from 'styled-components';

type IconProps = {
  className?: string;
}

function SuccessIcon({
  className,
}: IconProps) {
  return (
    <Svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Svg>
  );
}

export default SuccessIcon;

const Svg = styled.svg`
  transition: all 200ms ease;
  width: 18px;
  stroke: ${(props) => props.theme.colors.success};

  path {
    fill: transparent;
  }
`;
