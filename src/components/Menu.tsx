import React from 'react';
import styled from 'styled-components';
import UserIcon from './icons/User';
import Email2Icon from './icons/Email2';
import WorkIcon from './icons/Work';
import ResumeIcon from './icons/Resume';
import profilo from '../assets/images/profilo.jpeg';
import logo from '../assets/images/logo.svg';

type MenuProps = {
  onClick: (num: number) => void;
  section: number;
  scrolling?: boolean;
}

function Menu({ onClick, section, scrolling }: MenuProps) {
  const handleClick = (e: any, num: number) => {
    onClick(num);
    if (window.matchMedia('(max-width: 1100px)').matches) {
      const element = document.getElementById(e.target.dataset.section) as HTMLElement;

      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Wrapper $scrolling={scrolling}>
      <AvatarWrap>
        <Avatar>
          <Image src={profilo} />
          <div>
            <Name>Lorenzo Faenzi</Name>
            <Role>Front-end developer</Role>
          </div>
        </Avatar>
        <Logo><img src={logo} alt="Lorenzo Faenzi logo" /></Logo>
      </AvatarWrap>
      <LinkWrap>
        <CardLink
          first
          data-section="about"
          onClick={(e) => handleClick(e, 1)}
          active={section === 1}
        >
          <UserIcon />
          Chi sono
        </CardLink>
        <CardLink
          data-section="resume"
          onClick={(e) => handleClick(e, 2)}
          active={section === 2}
        >
          <ResumeIcon />
          Esperienze
        </CardLink>
        <CardLink
          data-section="works"
          onClick={(e) => handleClick(e, 3)}
          active={section === 3}
        >
          <WorkIcon />
          Progetti
        </CardLink>
        <CardLink
          last
          data-section="contact"
          onClick={(e) => handleClick(e, 4)}
          active={section === 4}
        >
          <Email2Icon />
          Contatti
        </CardLink>
      </LinkWrap>
    </Wrapper>
  );
}

export default Menu;

const Wrapper = styled.header<{ $scrolling?: boolean }>`
  width: 70px;
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 2;
  transition: all 500ms ease;

  @media ${(props) => props.theme.responsive.laptop} {
    top: 30px;
    left: 70px;
    position: fixed;
  }
  @media ${(props) => props.theme.responsive.tabletSm} {
    top: 15px;
    left: 10px;
  }
  @media ${(props) => props.theme.responsive.phone} {
    width: 100%;
    top: ${(props) => (props.$scrolling ? '-60px' : '0px')};
    left: 0;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const AvatarWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.responsive.phone} {
    background: ${(props) => props.theme.colors.gray};
  }
`;

const Avatar = styled.div`
  display: none;
  background: ${(props) => props.theme.colors.gray};
  @media ${(props) => props.theme.responsive.phone} {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
  }
`;

const Image = styled.div<{ src: string }>`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-right: 10px;
`;

const Name = styled.h4`
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

const Role = styled.h5`
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 25px;
  font-weight: 700;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  img {
    max-width: 50%
  }

  @media ${(props) => props.theme.responsive.phone} {
    border-radius: 0px;
    margin-bottom: 0px;
    width: 60px;
    height: 60px;
    box-shadow: none;
  }
`;

const LinkWrap = styled.div`
  @media ${(props) => props.theme.responsive.phone} {
    display: flex;
    position: relative;

    &::after {
      content: "";
      width: 90%;
      height: 1px;
      position: absolute;
      top: 0;
      left: 5%;
      background: linear-gradient(90deg, rgba(49,49,58,1) 0%, rgba(255,255,255,0.1) 50%, rgba(49,49,58,1) 100%);
    }
  }
`;

const CardLink = styled.a
  < { first?: boolean; last?: boolean; active?: boolean } >`
  width: 70px;
  height: 70px;
  background: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.active
    ? props.theme.colors.success
    : props.theme.colors.white)
};
  transition: all 100ms ease;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  svg {
    stroke: ${(props) => (props.active
    ? props.theme.colors.success
    : props.theme.colors.white)
};
    margin-bottom: 5px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.success};

    svg {
      stroke: ${(props) => props.theme.colors.success};
    }
  }

  ${(props) => props.first && `
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  `}

  ${(props) => props.last && `
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}

  & + & {
    position: relative;

    &::after {
      content: "";
      width: 90%;
      height: 1px;
      position: absolute;
      left: 10%;
      top: 0;
      background: linear-gradient(90deg, rgba(49,49,58,1) 0%, rgba(255,255,255,0.1) 100%);
    }
  }

  @media ${(props) => props.theme.responsive.phone} {
    border-radius: 0px;
    height: 60px;
    flex-grow: 1;
    box-shadow: none;

    &:last-child {
      border-radius: 0px;
    }

    & + & {
      &::after {
        content: "";
        height: 90%;
        width: 1px;
        left: 0;
        top: 1px;
        background: linear-gradient(0deg, rgba(49,49,58,1) 0%, rgba(255,255,255,0.1) 100%);
      }
    }
  }
`;
