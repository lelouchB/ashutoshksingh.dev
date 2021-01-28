// gatsby-browser.js
import React from "react"
import { GlobalStyles, theme } from "./src/themes/global-styles"
import { ThemeProvider } from "styled-components"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
