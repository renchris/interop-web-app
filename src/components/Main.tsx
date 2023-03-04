import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="48px"
    {...props}
  />
)

export default Main
