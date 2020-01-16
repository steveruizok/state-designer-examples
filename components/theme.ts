const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const base = {
  space: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Fira Sans", sans-serif',
    heading: '"Fira Sans", sans-serif',
    navigation: '"Fira Sans", sans-serif',
    monospace: '"Fira Code", "Fira Mono", "Monaco", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#fff',
    brightNeon: 'rgba(237, 262, 255, 1.000)',
    neon: 'rgba(2, 178, 255, 1.000)',
    focus: '#498dff',
    faded: 'rgba(240, 240, 255, .41)',
    muted: 'rgba(240, 240, 255, .03)',
    low: 'rgba(240, 240, 255, .12)',
    bright: 'rgba(240, 240, 255, .5)',
    active: 'rgba(222, 222, 255, .075)',
    inactive: 'rgba(140, 140, 155, .01)',
    shadow: 'rgba(40, 40, 60, .3)',
    highlight: '#ffd84c',
    background: '#fff',
    dark: '#3b6ed4',
    primary: '#3e7eff',
    light: '#eee',
    secondary: '#30c',
    grey10: '#3a3a3b',
    grey20: '#4a4a4b',
    grey30: '#555554',
    grey40: '#636364',
    grey70: '#7a7a7b',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'primary',
      ':hover': {
        color: 'faded',
      },
      ':visited': {
        color: 'dark',
      },
      ':active': {
        color: 'faded',
      },
    },
    pre: {
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    ul: {
      ml: 0,
      pl: 0,
      my: 1,
      listStyleType: 'none',
      // "& ul:nth-of-type(n)": {
      //   borderLeft: "1px solid #aaa"
      // }
    },
    li: {
      ml: 0,
      mb: 2,
    },
  },
  graph: {
    event: {
      fontWeight: 600,
    },
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      fontWeight: '600',
      letterSpacing: 0.5,
      py: 2,
      px: 4,
      mr: 2,
      fontSize: 2,
      outline: 'none',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'primary',
      boxShadow: `
      -1px -1px 8px 0px rgba(62, 127, 255, .16),
      -1px -1px 3px 0px rgba(62, 127, 255, .12),
      -1px -1px 1px 0px rgba(62, 127, 255, .1),
      1px 1px 6px 1px rgba(0, 0, 0, .22),
      1px 1px 3px 0px rgba(0, 0, 0, .09),
      1px 1px 1px 0px rgba(0, 0, 0, .1)`,
      textShadow: '-1px -1px 1px rgba(0,0,0,.2),1px -1px 1px rgba(0,0,0,.2)',
      '&:focus': {
        bg: 'primary',
        borderColor: 'focus',
      },
      '&:hover': {
        bg: 'focus',
        borderColor: 'focus',
      },
      '&:active': {
        bg: 'primary',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,.2)',
      },
      '&:disabled': {
        opacity: 0.5,
        boxShadow: '0px 2px 3px 1px rgba(0,0,0,.3)',
      },
      transition: 'all .16s',
    },
    secondary: {
      fontWeight: 'bold',
      bg: 'muted',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      color: 'faded',
      transition: 'all .16s',
      '&:hover': {
        bg: 'light',
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
    flat: {
      background: 'none',
      color: 'primary',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
    },
    link: {
      cursor: 'pointer',
      fontSize: 0,
      color: 'primary',
      background: 'none',
      p: 2,
    },
    event: {
      fontFamily: 'body',
      fontWeight: '600',
      letterSpacing: 0.5,
      py: 2,
      px: 2,
      fontSize: 1,
      outline: 'none',
      borderStyle: 'outset',
      borderWidth: 1,
      borderColor: 'rgba(2, 154, 255, .82)',
      textShadow: '-1px -1px 1px rgba(0,0,0,.2),1px -1px 1px rgba(0,0,0,.2)',
      boxShadow: `
      0px 0px 8px 1px rgba(0, 0, 0, .18),
      1px 1px 1px 0px rgba(0, 0, 0, .12)`,
      '&:focus': {
        bg: 'primary',
        borderColor: 'focus',
      },
      '&:hover': {
        bg: 'focus',
        borderColor: 'focus',
      },
      '&:active': {
        bg: 'primary',
        boxShadow: `
        0px 0px 6px 1px rgba(0, 0, 0, .16),
        1px 1px 1px 0px rgba(0, 0, 0, .06)`,
      },
      '&:disabled': {
        opacity: 0.6,
      },
      transition: 'all .12s',
    },
  },
  text: {
    title: {
      fontSize: 3,
      letterSpacing: '-.012em',
    },
    caption: {
      fontFamily: 'monospace',
      textTransform: 'uppercase',
      fontSize: 0,
      mt: 1,
      color: 'low',
      fontWeight: 'bold',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [6, 7, 8],
      fontWeight: 'display',
    },
    body: {
      color: 'text',
      fontWeight: 500,
      fontSize: 1,
      lineHeight: 1.5,
    },
    event: {
      color: 'brightNeon',
      fontSize: 1,
      letterSpacing: 0.5,
    },
    autoEvent: {
      letterSpacing: 1.5,
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline',
    },
    label: {
      fontFamily: 'monospace',
      letterSpacing: 1.1,
      fontSize: 0,
      py: 2,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'faded',
    },
  },
  inputs: {
    event: {
      fontFamily: 'monospace',
      fontSize: 1,
      lineHeight: 1,
      borderLeft: 'none',
      borderRight: 'none',
      borderColor: 'dark',
      borderRadius: '0',
      '&:hover': {
        borderColor: 'dark',
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
  },
}

export default base
