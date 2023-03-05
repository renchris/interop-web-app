import {
  Box,
  Text,
  Code,
  Flex,
} from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next/types'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CTA from '../components/CTA'
import BalanceCard from '../components/BalanceCard'
import SmartContractCard from '../components/SmartContractCard'
import ThirdWebCard from '../components/ThirdWebCard'

const Index: NextPage = () => {
  const address = useAddress()
  return (
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
        <Box my="48px">
          <ConnectWallet />
        </Box>
        <BalanceCard network="moonbeam-moonbase-alpha" title="Moonbase Balances" address={address || ''} />
        <SmartContractCard />
        <BalanceCard network="avalanche-testnet" title="Fuji Balances" address={address || ''} />
        <BalanceCard network="avalanche-testnet" title="Deposit Balances" address="0xA751ce47143d58B7F4b1DF07fE73ecCbc05d0e8C" />
        {/* <ThirdWebCard /> */}
        <CTA />
      </Flex>
    </Section>
  )
}

export default Index
