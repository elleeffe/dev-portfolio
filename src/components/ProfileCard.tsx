import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import { TitleH1 } from './Typography';
import TextSlider from './TextSlider';
import Button from './Button';
import profile from '../assets/images/profilo.jpeg';
import GithubIcon from './icons/Github';
import LinkedinIcon from './icons/Linkedin';
import codeBg from '../assets/images/code.jpg';
import FacebookIcon from './icons/Facebook';

type ProfileCardProps = {
  onClick: (num: number) => void;
}

function ProfileCard({ onClick }: ProfileCardProps) {
  return (
    <>
      <Shadow />
      <Profile>
        <BgDiv>
          <BigImage />
          <Divider />
        </BgDiv>
        <ButtonDiv>
          <TitleH1>Jhon Doe</TitleH1>
          <TextSlider words={['Front end developer', 'Web designer', 'Freelancer']} />
          <SocialLink href="#" target="_blank">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <LinkedinIcon />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <FacebookIcon />
          </SocialLink>
          <FlexWrap>
            <Button outlined icon="download" href="#">Download cv</Button>
            <Button outlined icon="send" href="#contact" onClick={() => onClick(4)}>Contact me</Button>
          </FlexWrap>
        </ButtonDiv>
      </Profile>
    </>
  );
}

export default ProfileCard;

const Shadow = styled.div`
  width: 450px;
  height: 100%;
  background: ${(props) => props.theme.colors.success};
  opacity: 0.1;
  border-radius: 10px;
  transform: translate(-20px, -20px);
  position: absolute;
  top: 0;
  left: 95px;
  z-index: 1;

  @media ${(props) => props.theme.responsive.laptop} {
    width: calc(100% - 230px);
    height: calc(100vh - 60px);
    min-height: 500px;
    top: 30px;
    left: 150px;
    transform: translate(-15px, -15px);
  }

  @media ${(props) => props.theme.responsive.tabletSm} {
    display: none;
  }
`;

const Profile = styled.div`
  width: 450px;
  height: 100%;
  background: blue;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 95px;
  z-index: 2;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.responsive.laptop} {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
    min-height: 500px;
    top: unset;
    left: unset;
  }
  @media ${(props) => props.theme.responsive.tabletSm} {
    z-index: 0;
  }
  @media ${(props) => props.theme.responsive.phone} {
    height: 550px;
    margin-top: 15px;
  }
`;

const BgDiv = styled.div`
  background-image: url(${codeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 55%;
  position: relative;
  border-radius: 10px 10px 0px 0px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.success};
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0px 0px;
  }

  svg {
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: -5px;
    z-index: 1;
  }
`;

const BigImage = styled.div`
  width: 180px;
  height: 180px;
  background-image: url(${profile});
  background-size: cover;
  background-position: center;
  border: 5px solid ${(props) => props.theme.colors.gray};
  position: absolute;
  z-index: 2;
  bottom: -50px;
  left: calc(50% - 90px);
  border-radius: 100%;

  @media ${(props) => props.theme.responsive.laptop} {
    width: 220px;
    height: 220px;
    left: calc(50% - 110px);
    bottom: -70px;
  }

  @media ${(props) => props.theme.responsive.phone} {
    width: 180px;
    height: 180px;
    left: calc(50% - 90px);
    bottom: -50px;
  }

  @media ${(props) => props.theme.responsive.phoneMd} {
    width: 150px;
    height: 150px;
    left: calc(50% - 75px);
    bottom: -40px;
  }
`;

const ButtonDiv = styled.div`
  background: ${(props) => props.theme.colors.gray};
  height: 45%;
  border-radius: 0px 0px 10px 10px;
  text-align: center;
  padding-top: 50px;
  position: relative;

  @media ${(props) => props.theme.responsive.laptop} {
    padding-top: 70px;
  }

  @media ${(props) => props.theme.responsive.phone} {
    padding-top: 50px;
  }

  @media ${(props) => props.theme.responsive.phoneMd} {
    padding-top: 40px;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  &::after {
    content: "";
    width: 90%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 5%;
    background: linear-gradient(90deg, rgba(49,49,58,1) 0%, rgba(255,255,255,0.1) 50%, rgba(49,49,58,1) 100%);
  }

  &::before {
    content: "";
    height: 90%;
    width: 1px;
    position: absolute;
    left: 50%;
    top: 1px;
    background: linear-gradient(0deg, rgba(49,49,58,1) 0%, rgba(255,255,255,0.1) 100%);
  }

  button, a {
    width: 50%;
    justify-content: center;
    height: 50px;
  }
`;
const SocialLink = styled.a`
  margin-top: 10px;
  display: inline-block;
  svg {
    width: 18px;

    &.github {
      transform: translateY(-2px);
    }

    &.facebook {
      width: 11px;
      transform: translateY(-3px);
    }
  }
  &:hover {
    .github {
      g {
        fill: ${(props) => props.theme.colors.success}
      }
    }
    .linkedin {
      fill: ${(props) => props.theme.colors.success}
    }
    .facebook {
      path {
        fill: ${(props) => props.theme.colors.success}
      }
    }
  }
  & + & {
    margin-left: 10px;
  }
`;
