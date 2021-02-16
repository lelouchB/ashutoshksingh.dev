// global-styles.js
import { createGlobalStyle  } from "styled-components"

export const theme = {
  colors: {
    primary: "#363537;",
    primaryDark: "#313032",
    primaryDarker: "#2e2d2f",
    primaryDarkest: "#262527",
    primaryLight: "#3b3a3d",
    primaryLighter: "#3e3d3f",
    primaryLightest: "#464548",
  },
  fonts: "Montserrat, Verdana,sans-serif",
  fontSizes: {
    small: "1em",
    medium: "1.5em",
    large: "2em",
  },
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Montserrat:wght@400&family=Satisfy&display=swap');

*, *:before, *:after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html {
    scroll-behavior: smooth;
    background-color:#f7f7f7;
    font-family:'Montserrat', sans-serif;
    font-size: ${props => props.theme.fontSizes.medium};
    padding: 0 1rem;
  }

  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.primaryDarkest};
    margin: 1rem 0;
  }
  h1 {
    font-size: 1.95rem;
    line-height: 2rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.35rem;
    line-height: 1.625rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.15rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.095rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
 `
