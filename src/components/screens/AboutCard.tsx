import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import {
  TitleH2, TitleH5, Text, TitleH3,
} from '../Typography';
import IconSection from '../IconSection';

type ContentCardProps = {
  active: boolean;
}

function AboutCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="about">
      <TitleH5 green>Ciao! Mi chiamo</TitleH5>
      <TitleH2>Lorenzo Faenzi</TitleH2>
      <Text>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean ac nisi aliquet, euismod nisi eget,
        faucibus lectus. Nullam convallis iaculis
        orci vitae sollicitudin.
        Maecenas viverra tincidunt ullamcorper.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean ac nisi aliquet, euismod nisi eget,
        faucibus lectus. Nullam convallis iaculis
        orci vitae sollicitudin.
        Maecenas viverra tincidunt ullamcorper.
      </Text>
      <Text>
        These are my working tools:
      </Text>
      <FlexWrap active={active}>
        <div>
          <TitleH5>
            Ore di studio
            <span>Troppe</span>
          </TitleH5>
          <Progress active={active} progress={active && 60} />
        </div>
        <div>
          <TitleH5>
            Ore di pratica
            <span>Anche di più</span>
          </TitleH5>
          <Progress active={active} progress={active && 80} />
        </div>
        <div>
          <TitleH5>
            Caffè presi
            <span>500</span>
          </TitleH5>
          <Progress active={active} progress={active && 70} />
        </div>
        <div>
          <TitleH5>
            Soddisfazione
            <span>100%</span>
          </TitleH5>
          <Progress active={active} progress={active && 100} />
        </div>
      </FlexWrap>
      <TitleH3>Come realizzo i miei progetti</TitleH3>
      <FlexWrap itemsStart>
        <IconSection
          icon="Coding"
          title="Design 100% responsive"
          content="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean ac nisi aliquet, euismod nisi eget,
        faucibus lectus. Nullam convallis iaculis
        orci vitae sollicitudin."
        />
        <IconSection
          icon="Website"
          title="Progettazione cross-browser"
          content="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean ac nisi aliquet, euismod nisi eget,
        faucibus lectus. Nullam convallis iaculis
        orci vitae sollicitudin."
        />
      </FlexWrap>
    </ContentCard>
  );
}

export default AboutCard;

const FlexWrap = styled.div<{ active?: boolean; itemsStart?: boolean; }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items:${({ itemsStart }) => (itemsStart ? 'flex-start' : 'center')}; 
  justify-content: space-between;
  margin: 0px 0px 20px;
  padding-bottom: 40px;

  > div {
    width: 48%;
    margin-top: 40px;

    @media ${(props) => props.theme.responsive.phoneMd} {
      width: 100%;
    }

    h5 {
      position: relative;
      white-space: nowrap;
      text-overflow: clip;

      span {
        position: absolute;
        right: 0;
        color: ${(props) => props.theme.colors.offWhite};
        font-size: 12px;
        font-weight: 500;
        transition: all 200ms ease;
        opacity: ${(props) => (props.active ? '1' : '0')};
        transition-delay: ${(props) => (props.active ? '700ms' : '0s')};
      }
    }
  }
`;

const Progress = styled.div<{ progress?: number | boolean; active?: boolean }>`
  width: 100%;
  height: 4px;
  background: ${(props) => props.theme.colors.dark};
  margin-top: 5px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.success};
    position: absolute;
    top: 0;
    left: 0;
    transition: all 500ms ease-in-out;
    transform: ${(props) => (props.active
    ? `scaleX(${props.progress}%)`
    : 'scaleX(5%)')
};
    transform-origin: 0% 50%;
  }
`;
