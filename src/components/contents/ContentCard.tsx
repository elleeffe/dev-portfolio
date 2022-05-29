import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ContentCardProps = PropsWithChildren<{
  active?: boolean;
  className?: string;
  id: string;
}>

function ContentCard({
  active, className, id, children,
}: ContentCardProps) {
  return (
    <Card active={active} className={className} id={id}>
      <div>{children}</div>
    </Card>
  );
}

export default ContentCard;

const Card = styled.section<{ active?: boolean }>`
  width: calc(100% - 115px);
  height: calc(100% - 30px);
  border-radius: 10px;
  background: black;
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 0;
  margin-left: 95px;
  transition: all 300ms ease;
  padding: 30px 0px 30px 470px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.active ? '1' : '0')};
  transform: ${(props) => (props.active
    ? 'scaleX(1)'
    : 'scaleX(0)')
};
  transform-origin: 0% 50%;
  background: ${(props) => props.theme.colors.gray};
  > div {
    overflow: auto;
    width: 100%;
    height: 100%;
    padding-right: 20px;

    @media ${(props) => props.theme.responsive.laptop} {
      padding-right: 0;
    }
  }

  @media ${(props) => props.theme.responsive.laptop} {
    min-height: 500px;
    position: relative;
    padding: 30px 15px;
    margin-left: 0px;
    width: 100%;
    top: unset;
    left: unset;
    margin-top: 30px;
    border-radius: 10px;
    transform-origin: 50% 50%;
    transform: ${(props) => (props.active
    ? 'scale(100%)'
    : 'scale(99%)')
};
    opacity: ${(props) => (props.active ? '1' : '1')};

    &:last-child {
      margin-bottom: 30px;
    }
  }
`;
