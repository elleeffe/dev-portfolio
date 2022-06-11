import styled from 'styled-components';

type TextProps = {
  green?: boolean;
}

export const TitleH1 = styled.h1<TextProps>`
  font-size: 34px;
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  line-height: 44px;
  font-weight: 400;

  @media ${(props) => props.theme.responsive.phone} {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const TitleH2 = styled.h2<TextProps>`
  font-size: 36px;
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  line-height: 46px;
  font-weight: 500;

  @media ${(props) => props.theme.responsive.phone} {
    font-size: 26px;
    line-height: 36px;
  }
`;

export const TitleH3 = styled.h3<TextProps>`
  font-size: 32px;
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  line-height: 42px;
  font-weight: 500;

  @media ${(props) => props.theme.responsive.phone} {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const TitleH4 = styled.h4<TextProps>`
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;

  @media ${(props) => props.theme.responsive.phone} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const TitleH5 = styled.h5<TextProps>`
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;

  @media ${(props) => props.theme.responsive.phoneMd} {
    font-size: 13px;
    line-height: 23px;
  }
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => (props.green
    ? props.theme.colors.success
    : props.theme.colors.offWhite)};
  opacity: 0.7;
  font-size: 15px;
  line-height: 26px;
  word-break: break-word;
  margin-top: 5px;

  & + & {
    margin-top: 25px;
  }

  @media ${(props) => props.theme.responsive.phone} {
    font-size: 14px;
    line-height: 26px;
  }
`;
