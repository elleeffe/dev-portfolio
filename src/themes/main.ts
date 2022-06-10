type ThemeType = typeof theme;

const theme = {
  fonts: {
    girloy: 'Gilroy',
  },
  responsive: {
    phoneSm: '(max-width: 400px)',
    phoneMd: '(max-width: 570px)',
    phone: '(max-width: 650px)',
    tabletSm: '(max-width: 850px)',
    tablet: '(max-width: 998px)',
    laptop: '(max-width: 1100px)',
    desktop: '(max-width: 1300px)',
  },
  colors: {
    white: '#ffffff',
    offWhite: '#e6e6e6',
    black: '#000000',
    dark: '#1E1E23',
    gray: '#31313A',
    success: '#2ed198',
    offSuccess: 'rgba(41, 187, 137, .2)',
    danger: '#fb3640',
    offDanger: 'rgba(251, 54, 64, .2)',
  },
  shadows: {
    light: '0 0 10px rgba(0, 0, 0, .2)',
  },
};
export default theme;

export type { ThemeType };

export type Colors = keyof typeof theme.colors;
