const fontSizes = [12, 14, 16, 20, 24, 32, 64];
fontSizes.xs = fontSizes[0];
fontSizes.s = fontSizes[1];
fontSizes.m = fontSizes[2];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
    darkGreyFont: '#4f4f4f',
    lightGreyFont: '#9aa5b0',
    statBgColor: '#f3f6f9',
    sectionBgColor: '#e7ecf2',
    lightBlue: '#87cefa',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: fontSizes,
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
  breakpoints: [
    '1170px',
    '@media (min-width: 56em) and (orientation: landscape)',
  ],
};
