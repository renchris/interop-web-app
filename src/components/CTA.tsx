import { Link as ChakraLink, Button } from '@chakra-ui/react'

import Container from './Container'

const CTA = (): JSX.Element => (
  <Container
    flexDirection="row"
    width="full"
    py={3}
    mt="256px"
    mx="auto"
    mb="24px"
  >
    <Button
      as={ChakraLink}
      isExternal
      href=""
      variant="outline"
      colorScheme="green"
      rounded="button"
      flexGrow={1}
      mr={2}
      width="full"
    >
      Devpost
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href="https://github.com/renchris/interop-web-app"
      variant="solid"
      colorScheme="green"
      rounded="button"
      flexGrow={3}
      ml={2}
      width="full"
    >
      View Repo
    </Button>
  </Container>
)

export default CTA
