import {
  Flex, FlexProps,
} from '@chakra-ui/react'

const MainCard = (props: FlexProps): JSX.Element => (
  <Flex
    backgroundColor="backgroundBlack"
    padding="1px"
    borderRadius="8px"
    backgroundImage="radial-gradient(at left top,#71717a,50px,#27272a 50%)"
    mb="48px"
  >
    <Flex
      padding="14px"
      borderRadius="8px"
      background="backgroundBlack"
      width="full"
      flexDir="column"
      {...props}
    />
  </Flex>
)

export default MainCard
