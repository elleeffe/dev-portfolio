import * as React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../themes/main';
import GlobalStyle from '../themes/GlobalStyle';
import Seo from '../components/Seo';

function NotFoundPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Seo />
      <Layout>
        <Title>404</Title>
        <SubTitle>Content not found</SubTitle>
        <CustomLink to="/">Back to portfolio</CustomLink>
      </Layout>
    </ThemeProvider>
  );
}

export default NotFoundPage;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 15vw;
  color: ${(props) => props.theme.colors.success};
  margin: 0;
  line-height: 1;

  @media ${(props) => props.theme.responsive.tabletSm} {
    font-size: 20vw;
  }
`;
const SubTitle = styled.h2`
  font-size: 3vw;
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0 15px;
  line-height: 1;

  @media ${(props) => props.theme.responsive.tabletSm} {
    font-size: 5vw;
  }
`;
const CustomLink = styled(Link)`
  color: ${(props) => props.theme.colors.success};
  cursor: pointer;
`;
