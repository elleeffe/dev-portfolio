import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import {
  TitleH2, TitleH5, Text, TitleH3, TitleH4,
} from '../Typography';
import DesignIcon from '../icons/Design';
import CodingIcon from '../icons/Coding';

type ContentCardProps = {
  active: boolean;
}

function AboutCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="about">
      <TitleH5 green>Hi! Welcome</TitleH5>
      <TitleH2>I'm Jhon Doe</TitleH2>
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
      <FlexWrap active={active} extraTop>
        <div>
          <TitleH5>
            Html
            <span>50%</span>
          </TitleH5>
          <Progress active={active} progress={active && 50} />
        </div>
        <div>
          <TitleH5>
            Css / Sass
            <span>80%</span>
          </TitleH5>
          <Progress active={active} progress={active && 80} />
        </div>
        <div>
          <TitleH5>
            Js / Ts
            <span>70%</span>
          </TitleH5>
          <Progress active={active} progress={active && 70} />
        </div>
        <div>
          <TitleH5>
            React
            <span>90%</span>
          </TitleH5>
          <Progress active={active} progress={active && 90} />
        </div>
      </FlexWrap>
      <TitleH3>My Services</TitleH3>
      <CustomFlexWrap noBorder>
        <div>
          <BigIcon>
            <DesignIcon />
          </BigIcon>
          <TitleH4>UX &#38; UI Design</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
        <div>
          <BigIcon>
            <CodingIcon />
          </BigIcon>
          <TitleH4>Front end development</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
      </CustomFlexWrap>
      <CustomFlexWrap noBorder>
        <div>
          <BigIcon>
            <DesignIcon />
          </BigIcon>
          <TitleH4>UX &#38; UI Design</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
        <div>
          <BigIcon>
            <CodingIcon />
          </BigIcon>
          <TitleH4>Front end development</TitleH4>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
      </CustomFlexWrap>
    </ContentCard>
  );
}

export default AboutCard;

const FlexWrap = styled.div<{ active?: boolean; extraTop?: boolean; noBorder?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 20px;
  padding-bottom: 40px;
  border-bottom: ${(props) => (props.noBorder ? 'none' : '1px solid rgba(255,255,255,0.5)')};

  > div {
    width: 48%;
    margin-top: ${(props) => (props.extraTop ? '40px' : '25px')};

    &.divider {
      position: relative;
      padding-right: 10px;
      &::after {
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        right: -5px;
        top: 0;
        background: rgba(255,255,255,0.5);
      }
    }

    @media ${(props) => props.theme.responsive.phoneMd} {
      width: 100%;

      &.divider {
        padding-right: 0px;
        &::after {
          display: none;
        }
      }
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

const CustomFlexWrap = styled(FlexWrap)`
  padding-bottom: 0px;
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
