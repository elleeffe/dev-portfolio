import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import { TitleH3, TitleH4, Text } from '../Typography';
import Button from '../Button';
import GithubIcon from '../icons/Github';
import WebsiteIcon from '../icons/Website';
import logo from '../../assets/images/logo-green.svg';
import useWebCamera from '../../assets/images/use-web-camera.png';

type ContentCardProps = {
  active: boolean;
}

function WorksCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="works">
      <TitleH3>Repo open source</TitleH3>
      <FlexWrap>
        <PreviewWrap>
          <Preview><img src={logo} alt="preview" /></Preview>
        </PreviewWrap>
        <div>
          <TitleH4 green>Il mio portfolio</TitleH4>
          <Text>
            Si, è il sito che stai navigando adesso.
            &#200; stato realizzato utilizzando Gatbsy.js, Typescript e
            Styled-components, dai un occhio alla repo ;)
          </Text>
          <ButtonWrap>
            <CustomButton href="https://github.com/elleeffe/portfolio" outlined>
              <GithubIcon />
              Repository
            </CustomButton>
            {/* <CustomButton href="#" outlined>
              <WebsiteIcon />
              Visita
            </CustomButton> */}
          </ButtonWrap>
        </div>
      </FlexWrap>
      <FlexWrap>
        <PreviewWrap>
          <Preview>
            <img src={useWebCamera} alt="preview" />
          </Preview>
        </PreviewWrap>
        <div>
          <TitleH4 green>Use web camera</TitleH4>
          <Text>
            Scatta una foto o un video direttamente dal browser, semplice.
            Single page application creata con React e Typescript.
          </Text>
          <ButtonWrap>
            <CustomButton href="https://github.com/elleeffe/use-web-camera" outlined>
              <GithubIcon />
              Repository
            </CustomButton>
            <CustomButton href="https://use-web-camera.vercel.app/" outlined>
              <WebsiteIcon />
              Visita
            </CustomButton>
          </ButtonWrap>
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
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.dark};

  img {
    max-width: 80%;
    border-radius: 10px;
  }

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
