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
        <PreviewWrap>
          <Preview />
          <ButtonWrap>
            <CustomButton href="#" outlined>
              <GithubIcon />
              Repository
            </CustomButton>
            <CustomButton href="#" outlined>
              <WebsiteIcon />
              Visita
            </CustomButton>
          </ButtonWrap>
        </PreviewWrap>
        <div>
          <TitleH4 green>Random website</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
      </FlexWrap>
      <FlexWrap>
        <PreviewWrap>
          <Preview />
          <ButtonWrap>
            <CustomButton href="#" outlined>
              <GithubIcon />
              Repository
            </CustomButton>
            <CustomButton href="#" outlined>
              <WebsiteIcon />
              Visita
            </CustomButton>
          </ButtonWrap>
        </PreviewWrap>
        <div>
          <TitleH4 green>Random website</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
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

const PreviewWrap = styled.div`
margin-right: 15px;
`;

const Preview = styled.div`
  height: 150px;
  width: 200px;
  background: ${(props) => props.theme.colors.dark};
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);

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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CustomButton = styled(Button)`
  font-weight: 400;
  margin-top: 15px;
  font-size: 11px;
  align-items: center;
  display: flex;

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
