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
    lightFreyFont: '#9aa5b0',
    statBgColor: '#f3f6f9',
    sectionBgColor: '#e7ecf2',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: {
    normal: 400,
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
