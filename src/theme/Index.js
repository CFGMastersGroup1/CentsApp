import { extendTheme } from "native-base";

  export default function Index() {
    
    const customTheme = extendTheme({
    
      colors: {
      green: {
        300: '#53B175',
      },
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
    typography: {
      letterSpacings: {
        "xs": "-0.05em",
        "sm": "-0.025em",
        "md": 0,
        "lg": "0.025em",
        "xl": "0.05em",
        "2xl": "0.1em",
      },
      lineHeights: {
        "2xs": "1em",
        "xs": "1.125em",
        "sm": "1.25em",
        "md": "1.375em",
        "lg": "1.5em",
        "xl": "1.75em",
        "2xl": "2em",
        "3xl": "2.5em",
        "4xl": "3em",
        "5xl": "4em",
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        extraBlack: 950,
      },
      fonts: {
        heading: undefined,
        body: undefined,
        mono: undefined,
      },
      fontSizes: {
        "2xs": 10,
        "xs": 12,
        "sm": 14,
        "md": 16,
        "lg": 18,
        "xl": 20,
        "2xl": 24,
        "3xl": 30,
        "4xl": 36,
        "5xl": 48,
        "6xl": 60,
        "7xl": 72,
        "8xl": 96,
        "9xl": 128,
      },
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  })

  return(customTheme)
};
