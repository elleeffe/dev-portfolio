import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function WebsiteIcon({ className }: SvgProps) {
  return <Svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></Svg>;
}

export default WebsiteIcon;

const Svg = styled.svg`
  width: 20px;
  fill: none;
  transition: all 100ms ease;
`;
