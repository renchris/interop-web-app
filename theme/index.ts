import { extendTheme } from '@chakra-ui/react'
import components from './components'

const fonts = {
  heading: 'DM Sans, sans-serif',
  body: 'Poppins, sans-serif',
}

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const config = {
  initialColorMode: 'dark',
}

const styles = {
  global: () => ({
    body: {
      bgColor: '#0a0a0b',
      background: 'url(./grid.svg)',
    },
  }),
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#ade3b8',
      },
      heroGradientStart: {
        default: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  components,
  config,
  styles,
})

export default theme
