import React, { useMemo } from 'react';
import styled from 'styled-components';
import Icons, { IconType } from './icons';
import { Text, TitleH4 } from './Typography';

type Props = {
  icon: IconType;
  iconClassName?: string;
  title: string;
  content: string;
}

function IconSection({
  icon, iconClassName = '', title, content,
}: Props) {
  // eslint-disable-next-line max-len
  const renderIcon = useMemo(() => Icons[icon]({ className: iconClassName }), [icon, iconClassName]);

  return (
    <div>
      <BigIcon>
        {renderIcon}
      </BigIcon>
      <TitleH4>{title}</TitleH4>
      <Text>
        {content}
      </Text>
    </div>
  );
}

export default IconSection;

const BigIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.colors.success};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  svg {
    fill: ${(props) => props.theme.colors.success};
    path {
      stroke: ${(props) => props.theme.colors.success};
    }
  }

  @media ${(props) => props.theme.responsive.phoneSm} {
    width: 50px;
    height: 50px;
    border-width: 3px;

    svg {
      width: 18px;
    }
  }
`;
