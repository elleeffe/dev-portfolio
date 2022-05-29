import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import { TitleH3, TitleH4, Text } from '../Typography';
import Button from '../Button';
import GithubIcon from '../icons/Github';
import WebsiteIcon from '../icons/Website';

type ContentCardProps = {
  active: boolean;
}

function WorksCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="works">
      <TitleH3>My Projects</TitleH3>
      <FlexWrap>
        <Preview />
        <div>
          <TitleH4 green>Random website</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
          <CustomButton href="#" outlined>
            <GithubIcon />
            view on github
          </CustomButton>
          <CustomButton href="#" outlined>
            <WebsiteIcon />
            visit the website
          </CustomButton>
        </div>
      </FlexWrap>
      <FlexWrap>
        <Preview />
        <div>
          <TitleH4 green>Random website</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
          <CustomButton href="#" outlined>
            <GithubIcon />
            view on github
          </CustomButton>
          <CustomButton href="#" outlined>
            <WebsiteIcon />
            visit the website
          </CustomButton>
        </div>
      </FlexWrap>
    </ContentCard>
  );
}

export default WorksCard;

const FlexWrap = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;

  div:last-child {
    flex: 1;
  }

  & + & {
    padding-top: 25px;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`;

const Preview = styled.div`
  height: 200px;
  width: 250px;
  background: ${(props) => props.theme.colors.dark};
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
  margin-right: 15px;

  @media ${(props) => props.theme.responsive.phoneMd} {
    width: 100%;
    height: 280px;
    margin-right: 0px;
    margin-bottom: 20px;
  }

  @media ${(props) => props.theme.responsive.phoneSm} {
    height: 200px;
  }
`;

const CustomButton = styled(Button)`
  font-weight: 400;
  margin-top: 15px;
  font-size: 12px;
  align-items: flex-start;
  display: flex;

  & + & {
    transform: translateX(-2px);
  }

  svg {
    margin-right: 5px;
    margin-left: 0px;
  }
  &:hover {
    text-decoration: underline;
    svg {
      g{
        fill: ${(props) => props.theme.colors.success}
      }
    }
  }
`;
