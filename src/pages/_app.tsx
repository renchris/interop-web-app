import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { MoonbaseAlpha } from '@thirdweb-dev/chains'
import Head from 'next/head'
import theme from '../../theme'
import Container from '../components/Container'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThirdwebProvider
    activeChain={MoonbaseAlpha}
    supportedChains={[MoonbaseAlpha]}
  >
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  </ThirdwebProvider>
)
export default MyApp
