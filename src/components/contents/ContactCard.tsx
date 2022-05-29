import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import {
  TitleH3, TitleH4, TitleH5, Text,
} from '../Typography';
import Form from '../form';

type ContentCardProps = {
  active: boolean;
}

function ContactCard({ active }: ContentCardProps) {
  return (
    <ContentCard active={active} id="contact">
      <TitleH3>My Contacts</TitleH3>
      <FlexWrap>
        <div>
          <TitleH5 green>Email:</TitleH5>
          <IconLink
            href="#"
          >
            info@developer.com
          </IconLink>
        </div>
        <div>
          <TitleH5 green>Phone:</TitleH5>
          <IconLink
            href="#"
          >
            +39 3667890123
          </IconLink>
        </div>
      </FlexWrap>
      <TitleH4>Quickly message</TitleH4>
      <Text>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        <br />
        Aenean ac nisi aliquet, euismod nisi eget,
        faucibus lectus.
      </Text>
      <Form />
    </ContentCard>
  );
}

export default ContactCard;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 0px 0px 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.offWhite};

  div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 15px;

    h5 {
      margin-right: 10px;
    }
  }

  @media ${(props) => props.theme.responsive.laptop} {
    padding-bottom: 30px;
  }

  @media ${(props) => props.theme.responsive.phone} {
    div {
      width: 100%;
    }
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.offWhite};
  opacity: 0.7;
  transition: all 200ms ease;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 5px;

  svg {
    width: 16px;
    margin-right: 5px;
    stroke: ${(props) => props.theme.colors.offWhite};
  }

  &:hover {
    color: ${(props) => props.theme.colors.success};
    opacity: 1;
    text-decoration: underline;
    svg {
      stroke: ${(props) => props.theme.colors.success};
    }
  }
`;
