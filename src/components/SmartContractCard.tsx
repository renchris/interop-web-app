import { ethers } from 'ethers'
import {
  Button, Text,
} from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import abi from './abi'

const SmartContractCard = () => {
  const address = useAddress()
  if (typeof window !== 'undefined' && !!window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false
  }
  const sendMessageContract = async () => {
    const providerRPC = {
      moonbase: {
        name: 'moonbase-alpha',
        rpc: 'https://rpc.api.moonbase.moonbeam.network',
        chainId: 1287, // 0x507 in hex,
        currencySymbol: 'DEV',
      },
    }

    // const provider = new ethers.providers.JsonRpcProvider(
    //   providerRPC.moonbase.rpc,
    //   {
    //     chainId: providerRPC.moonbase.chainId,
    //     name: providerRPC.moonbase.name,
    //   },
    // )

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      1287,
    )

    const requestAccount = async () => {
      // First check if the user is using a MetaMask compatible browser
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          console.log('Account access granted.')
        } catch (error) {
          console.error('Account access denied:', error)
        }
      } else {
        console.error('Please install MetaMask.')
      }
    }

    await requestAccount()

    const accounts = await provider.listAccounts()
    const account = accounts[0]

    // const privateKey = 'd471a6ab34cbafef204d1b691229a44255ad0642f878847958d4518c220ce205'
    // const wallet = new ethers.Wallet(privateKey, provider)

    // const contractAddress = '0x25A69ec2a697e8D3C3e035374c2dA59F3AD28443'
    // const signer = wallet.connect(provider)
    // const signerContract = new ethers.Contract(contractAddress, abi, signer)
    const contractAddress = '0x0a84beE6E333e7659D08334b301888bAc5431553'
    const signer = provider.getSigner(account)
    const signerContract = new ethers.Contract(contractAddress, abi, signer)

    // const wallet = new ethers.Wallet(ethersGeneratedPrivateKey, provider)
    // console.log(wall.publicKey)
    // const provider = new ethers.providers.Web3Provider(window.ethereum)

    try {
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      await signerContract.sendMessage('A-Message', '0x0A94762b0fd8422EEFE7AEB30794ebC3a36359b1', 'Avalanche', { gasLimit: 1000000 })
    } catch (err) {
      console.log('failed to send message: ', err)
    }
  }

  return (

    <Button
      variant="solid"
      colorScheme="green"
      rounded="button"
      flexGrow={3}
      height="28px"
      width="fit-content"
      mb="36px"
      borderRadius="8px"
      onClick={sendMessageContract}
    >
      <Text size="button">
        Call Avalanche Contract from Moonbeam
      </Text>
    </Button>
  )
}

export default SmartContractCard
