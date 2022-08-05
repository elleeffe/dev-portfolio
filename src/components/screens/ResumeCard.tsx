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
          <DateTag present>01/10/2021 - Oggi</DateTag>
          <TitleH4>Impronta Advance srl</TitleH4>
          <TitleH5 green>Junior front end developer</TitleH5>
          <Text>
            Sviluppo front end di applicazioni e siti web responsive
            principalmente tramite l'utilizzo di React, Next.js, Gatbsy.js e Typescript
          </Text>
        </div>
        <div>
          <DateTag>01/03/2021 - 30/09/2021</DateTag>
          <TitleH4>Impronta Advance srl</TitleH4>
          <TitleH5 green>Stage formativo sviluppo front end</TitleH5>
          <Text>
            Studio e formazione finalizzati allo sviluppo di siti
            web e applicazioni tramite l'utilizzo di tecnologie Javascript.
          </Text>
        </div>
      </FlexWrap>
      <FlexWrap>
        <div className="divider">
          <DateTag>01/12/2019 - 30/09/2020</DateTag>
          <TitleH4>Codenjine</TitleH4>
          <TitleH5 green>Web developer</TitleH5>
          <Text>
            Sviluppo siti web responsive tramite l'utilizzo di tecnologie Javascript.
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
