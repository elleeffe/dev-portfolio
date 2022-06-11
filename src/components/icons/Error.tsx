import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function Error({
  className = '',
}: SvgProps) {
  return (
    <Svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Svg>
  );
}

export default Error;

const Svg = styled.svg`
  transition: all 200ms ease;
  width: 16px;
  stroke: ${(props) => props.theme.colors.danger};

  path {
    fill: transparent;
  }
`;
