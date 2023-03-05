import {
  useContract, useContractWrite, Web3Button,
} from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import abi from './abi'

const ThirdWebCard = () => {
  // get a signer from somewhere (createRandom is being used purely for example purposes)
  const signer = ethers.Wallet.createRandom()
  // get an instance of the SDK with the signer already setup
  const sdk = ThirdwebSDK.fromSigner(signer, 1287)
  const { contract } = useContract('0x676187181DbaDd2950657244CAA7D2E4A0BC450e')
  const message = 'A-Message'
  const destinationAddress = '0x0A94762b0fd8422EEFE7AEB30794ebC3a36359b1'
  const destinationChain = 'Avalanche'
  // const contract = sdk.getContractFromAbi('0x676187181DbaDd2950657244CAA7D2E4A0BC450e', abi)

  const { mutateAsync } = useContractWrite(contract, 'sendMessage')

  return (
    <Web3Button
      contractAddress="0x676187181DbaDd2950657244CAA7D2E4A0BC450e"
      // Calls the "setName" function on your smart contract with "My Name" as the first argument
      action={() => mutateAsync([message, destinationAddress, destinationChain])}
    >
      Send Transaction
    </Web3Button>
  )
}

export default ThirdWebCard
