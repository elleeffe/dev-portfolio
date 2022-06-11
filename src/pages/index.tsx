import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../themes/main';
import GlobalStyle from '../themes/GlobalStyle';
import ProfileCard from '../components/screens/ProfileCard';
import AboutCard from '../components/screens/AboutCard';
import ResumeCard from '../components/screens/ResumeCard';
import WorksCard from '../components/screens/WorksCard';
import ContactCard from '../components/screens/ContactCard';
import Menu from '../components/Menu';
import Preloader from '../components/Preloader';
import Seo from '../components/Seo';
import MyParticles from '../components/MyParticles';

function IndexPage() {
  const [activeSection, setActiveSection] = useState(1);
  const [hide, setHide] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  let scrollPos = typeof window !== 'undefined' && window.pageYOffset;

  const handleScroll1 = () => {
    const sections = document.querySelectorAll('section');
    Array.from(sections).forEach((current: HTMLElement) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 300;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (sectionId === 'about') {
          setActiveSection(1);
        }
        if (sectionId === 'resume') {
          setActiveSection(2);
        }
        if (sectionId === 'works') {
          setActiveSection(3);
        }
        if (sectionId === 'contact') {
          setActiveSection(4);
        }
      }
    });
  };

  const handleScroll2 = () => {
    const currentScrollPos = window.pageYOffset;
    if (scrollPos > currentScrollPos) {
      setScrollNav(false);
    } else {
      setScrollNav(true);
    }
    scrollPos = currentScrollPos;
  };

  useEffect(() => {
    const handleScroll = () => {
      handleScroll1();
      handleScroll2();
    };

    if (window.matchMedia('(max-width: 1100px)').matches) {
      window.addEventListener('scroll', handleScroll);
      return;
    }

    return () => {
      if (window.matchMedia('(max-width: 1100px)').matches) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Initial Preloader
  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 1200);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Seo />
      <MyParticles />
      <Preloader hide={hide} />
      <Wrapper show={hide}>
        <CardsWrapper>
          <Menu
            onClick={(num) => setActiveSection(num)}
            section={activeSection}
            scrolling={scrollNav}
          />
          <ProfileCard onClick={(num) => setActiveSection(num)} />
          <AboutCard active={activeSection === 1} />
          <ResumeCard active={activeSection === 2} />
          <WorksCard active={activeSection === 3} />
          <ContactCard active={activeSection === 4} />
        </CardsWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default IndexPage;

const Wrapper = styled.div<{ show?: boolean }>`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: all 300ms ease;
  transition-delay: 500ms;

  @media ${(props) => props.theme.responsive.laptop} {
    align-items: flex-start;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  height: 620px;
  position: relative;
  padding: 20px;

  @media ${(props) => props.theme.responsive.laptop} {
    height: auto;
    padding: 30px 80px 0px 150px;
  }
  @media ${(props) => props.theme.responsive.tabletSm} {
    height: auto;
    padding: 15px 15px 0px 90px;
  }
  @media ${(props) => props.theme.responsive.phone} {
    height: auto;
    padding: 115px 10px 0px;
  }
`;
