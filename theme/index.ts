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
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
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