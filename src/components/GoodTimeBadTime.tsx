import { Heading } from '@chakra-ui/react'

const GoodTimeBadTimeHeading: React.FC<
  React.ComponentPropsWithoutRef<typeof Heading>
> = ({ children, ...props }) => (
  <Heading
    as='h1'
    fontSize={{ base: '4xl', md: '4xl' }}
    fontWeight='bold'
    lineHeight='shorter'
    textAlign='center'
    textShadow='0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff'
    {...props}
  >
    {children}
  </Heading>
)

export default GoodTimeBadTimeHeading
