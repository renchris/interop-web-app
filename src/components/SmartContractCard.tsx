import { useContractWrite, useContract, Web3Button } from '@thirdweb-dev/react'

// Your smart contract address
const contractAddress = '0x362D334F0710873C8A1fd2eCFC6704c0a86955dC'

const SmartContractCard = () => {
  const { contract } = useContract(contractAddress)
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    'sendMessage',
  )

  return (
    <Web3Button
      contractAddress={contractAddress}
      action={() => mutateAsync(
        // Place your arguments here in an array, in the same order as your smart contract function
        ['A-MESSAGE', '0x0A94762b0fd8422EEFE7AEB30794ebC3a36359b1', 'Avalanche'],
      )}
    >
      Send Transaction
    </Web3Button>
  )
}

export default SmartContractCard
