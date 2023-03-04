import { Link as ChakraLink, Button } from '@chakra-ui/react'

import Container from './Container'

const CTA = (): JSX.Element => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    <Button
      as={ChakraLink}
      isExternal
      href=""
      variant="outline"
      colorScheme="green"
      rounded="button"
      flexGrow={1}
      mx={2}
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
      mx={2}
      width="full"
    >
      View Repo
    </Button>
  </Container>
)

export default CTA
