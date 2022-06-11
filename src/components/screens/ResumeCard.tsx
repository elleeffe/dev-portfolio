import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import {
  TitleH5, Text, TitleH3, TitleH4,
} from '../Typography';

type ContentCardProps = {
  active: boolean;
}

function ResumeCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="resume">
      <TitleH3>Developer experience</TitleH3>
      <FlexWrap>
        <div className="divider">
          <DateTag present>Mar 2021 - present</DateTag>
          <TitleH4>Tech &#38; Co.</TitleH4>
          <TitleH5 green>Front-end developer</TitleH5>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
        <div>
          <DateTag>Apr 2020 - Mar 2021</DateTag>
          <TitleH4>Space - Web agency</TitleH4>
          <TitleH5 green>Junior front-end developer</TitleH5>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
      </FlexWrap>
      <FlexWrap>
        <div className="divider">
          <DateTag>Jun 2020 - Feb 2021</DateTag>
          <TitleH4>Web Lab - Tech solution</TitleH4>
          <TitleH5 green>Junior front-end developer</TitleH5>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Aenean ac nisi aliquet, euismod nisi eget,
            faucibus lectus.
          </Text>
        </div>
        <div>
          <DateTag>Mar 2019 - Dec 2020</DateTag>
          <TitleH4>Freelance</TitleH4>
          <TitleH5 green>Junior front-end developer</TitleH5>
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

export default ResumeCard;

const FlexWrap = styled.div<{ active?: boolean; extraTop?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255,255,255,0.5);

  > div {
    width: 48%;
    margin-top: ${(props) => (props.extraTop ? '40px' : '20px')};

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

const DateTag = styled.span<{ present?: boolean }>`
  display: inline-block;
  padding: 3px 6px 2px 6px;
  color: ${(props) => (props.present
    ? props.theme.colors.success
    : props.theme.colors.offWhite)
};
  opacity: ${(props) => (props.present ? 1 : 0.7)};
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid ${(props) => (props.present
    ? props.theme.colors.success
    : props.theme.colors.offWhite)
};
  margin-bottom: 10px;
`;
