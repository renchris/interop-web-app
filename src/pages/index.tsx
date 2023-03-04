import {
  Text,
  Code,
} from '@chakra-ui/react'
import { ConnectWallet } from '@thirdweb-dev/react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Main from '../components/Main'
import CTA from '../components/CTA'

const Index = () => (
  <Section>
    <Hero title="Interoperable" />
    <Main>
      <Text color="text">
        Cross-Chain Liquidity Provider Token Deposits and Withdrawls
        utilizing General Message Passing Protocol with
        {' '}
        <Code>Moonbeam</Code>
        {' '}
        +
        <Code>Axelar</Code>
        .
      </Text>
      <ConnectWallet />
    </Main>
    <CTA />
  </Section>
)

export default Index
