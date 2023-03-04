import {
  Box,
  Text,
  Code,
  Flex,
} from '@chakra-ui/react'
import { ConnectWallet } from '@thirdweb-dev/react'
import { NextPage } from 'next/types'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CTA from '../components/CTA'

const Index: NextPage = () => (
  <Section>
    <Hero title="Interoperable" />
    <Flex
      mt="24px"
      mx="auto"
      flexDir="column"
    >
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
      <Box mt="48px">
        <ConnectWallet />
      </Box>
      <CTA />
    </Flex>
  </Section>
)

export default Index
