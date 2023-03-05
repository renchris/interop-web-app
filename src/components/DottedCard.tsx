import {
  Flex, Text,
} from '@chakra-ui/react'

const DottedCard = (
  { hairline, children }
  :
  {
    hairline: string,
    children: JSX.Element
  },
) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    padding="16px"
    borderStyle="dashed"
    borderWidth="1px"
    borderRadius="8px"
    borderColor="#333333"
    width="full"
    position="relative"
  >
    <Flex
      position="absolute"
      top="-7px"
      left="16px"
      color="hairline"
      px="6px"
      borderRadius="9999px"
      fontSize="9px"
      textTransform="uppercase"
      shadow="0 0 1px 3px #000"
      backgroundColor="hairlineBackground"
    >
      <Text size="hairline">
        {hairline}
      </Text>
    </Flex>
    <Flex width="inherit">
      {children}
    </Flex>
  </Flex>
)

export default DottedCard
