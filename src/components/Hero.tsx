import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      mt="48px"
    >
      <Heading as="h1" size={isMobile ? 'h2' : 'h1'}>{title}</Heading>
    </Flex>
  )
}

export default Hero
