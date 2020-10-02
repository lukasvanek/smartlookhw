// @ts-ignore
import { darken, lighten, alpha } from '@theme-ui/color';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#f7f7f7',
    primary: '#11e',
    secondary: '#c0c',
    highlight: '#e0e',
    muted: '#e5e5e5',
    card: 'white',
    modes: {
      dark: {
        text: '#fff',
        card: 'black',
        background: '#111517',
        primary: '#39b5bd',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#223',
      },
    },
  },
  fonts: {
    body: '"Ubuntu", "Avenir Next", "Helvetica Neue",system-ui, sans-serif',
    heading: 'inherit',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      borderRadius: 999,
      outline: 'none',
      cursor: 'pointer',
      fontWeight: '400',
      transition: 'all 140ms ease-in-out',
      ':hover': {
        backgroundColor: darken('primary', 0.1),
      },
      ':active': {
        outline: 'none',
        transform: 'scale(0.85)',
      },
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  cards: {
    primary: {
      padding: 3,
      mb: 3,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      backgroundColor: 'card',
    },
  },
  styles: {
    root: {
      transition: 'background-color 0.4s ease-out',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      px: [3, 5, 6, 7],
    },
    a: {
      color: 'text',
      textDecoration: 'none',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.caps',
      color: alpha('text', 0.8),
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '300',
      fontSize: 1,
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    img: {
      maxWidth: '100%',
    },
    hr: {
      color: 'muted',
    },
  },
};

export default theme;
