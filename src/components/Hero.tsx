import { Flex, Heading } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading as="h1" size="h1">{title}</Heading>
  </Flex>
)

export default Hero
