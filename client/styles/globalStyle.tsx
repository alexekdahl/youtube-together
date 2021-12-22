import { createGlobalStyle } from 'styled-components'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes
} from './variables'

export const GlobalStyle = createGlobalStyle`
  body {
     background-color: ${colors.darkest};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    color: ${colors.white};
  }

  h1 {
    font-family: ${fonts.raleway};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.hero};
    line-height: ${lineHeights.hero};
  }

  h2 {
    font-family: ${fonts.raleway};
    font-weight: ${fontWeights.semiBold};
    font-size: ${fontSizes.extraLarge};
    line-height: ${lineHeights.extraLarge};
  }

  h3 {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.regular};
    font-size: ${fontSizes.large};
    line-height: ${lineHeights.large};
  }

  h4 {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.regular};
    font-size: ${fontSizes.medium};
    line-height: ${lineHeights.medium};
  }

  h5 {
    font-family: ${fonts.raleway};
    font-weight: ${fontWeights.thin};
    font-size: ${fontSizes.extraLarge};
    line-height: ${lineHeights.extraLarge};
  }

  p {
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.regular};
    font-size: ${fontSizes.large};
    line-height: ${lineHeights.large};
  }


  @media screen and (max-width: ${sizes.mobile}px){
    h1 {
      font-size: ${fontSizes.medium};
      line-height: ${lineHeights.medium};
    }

    h2 {
      font-size: ${fontSizes.small};
      line-height: ${lineHeights.small};
    }

    h3 {
      font-size: ${fontSizes.small};
      line-height: ${lineHeights.small};
    }

    h4 {
      font-size: ${fontSizes.extraSmall};
      line-height: ${lineHeights.extraSmall};
    }

    h5 {
      font-size: ${fontSizes.small};
      line-height: ${lineHeights.small};
    }

    p {
      font-size: ${fontSizes.extraSmall};
      line-height: ${lineHeights.extraSmall};
    }

  }
`
