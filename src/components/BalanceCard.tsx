import {
  Button,
  Text,
  Box,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import DottedCard from './DottedCard'
import MainCard from './MainCard'

const BalanceCard = () => {
  interface IToken {
    balance: string,
    balance_24hr: string,
    contract_address: string,
    contract_decimals: number,
    contract_name: string,
    contract_ticker_symbol: string,
    last_transferred_at: string,
    logo_url: string,
    native_token: boolean,
    nft_data: null,
    quote: number,
    quote_24h: null | number,
    quote_rate: null | number,
    quote_rate_24h: null | number,
    supports_erc: Array<string>,
    type: string,
  }

  const [items, setItems] = useState<Array<IToken>>([])

  let covalentApiKey: string

  if (process.env.secrets) {
    const jsonStr = process.env.secrets.replace(
      /(\w+:)|(\w+ :)/g,
      (matchedStr) => `"${matchedStr.substring(0, matchedStr.length - 1)}":`,
    )
    const secretObject = JSON.parse(jsonStr)
    covalentApiKey = secretObject.NEXT_PUBLIC_COVALENT_API_KEY
  } else {
    covalentApiKey = process.env.NEXT_PUBLIC_COVALENT_API_KEY || ''
  }

  const address = useAddress()

  const getTokenBalance = async () => {
    const apiUrl = `https://api.covalenthq.com/v1/moonbeam-moonbase-alpha/address/${address}/balances_v2/?key=${covalentApiKey}`
    const result = await fetch(apiUrl)
    const response = await result.json()
    console.log(response.data.items)
    setItems(response.data.items)
    return response
  }

  return (
    <MainCard>
      <Button
        variant="solid"
        colorScheme="green"
        rounded="button"
        flexGrow={3}
        height="28px"
        width="fit-content"
        mb="36px"
        borderRadius="8px"
        isDisabled={!address}
        onClick={() => getTokenBalance()}
      >
        <Text size="button">
          Check Balance
        </Text>
      </Button>
      <DottedCard
        hairline="Covalent API"
      >
        <Box>
          <Text size="subtitle">
            Token Balances
          </Text>
          { items && (
          <Box width="inherit">
            {items.map((item) => {
              const decimals = item.contract_decimals === 0 ? 18 : item.contract_decimals
              const balance = Number((Number(item.balance) / (10 ** decimals)).toFixed(4))
              return (
                <Box
                  key={item.contract_address}
                  backgroundImage="radial-gradient(at left top,#71717a,50px,#27272a 50%)"
                  borderRadius="16px"
                  padding="1px"
                  mt="16px"
                >
                  <Box
                    borderRadius="16px"
                    padding="16px"
                    width="auto"
                    height="fit-content"
                    backgroundColor="backgroundBlack"
                  >
                    <Text color="white">
                      {balance}
                      {' '}
                      {item.contract_ticker_symbol}
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </Box>
          )}
        </Box>
      </DottedCard>
    </MainCard>
  )
}

export default BalanceCard
