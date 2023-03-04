import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { MoonbaseAlpha } from '@thirdweb-dev/chains'

import theme from '../../theme'
import Container from '../components/Container'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThirdwebProvider activeChain={MoonbaseAlpha}>
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  </ThirdwebProvider>
)
export default MyApp
