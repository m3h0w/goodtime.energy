import { chakra, Spinner } from '@chakra-ui/react'

const ChakraSpinner = chakra(Spinner, {
  baseStyle: {
    color: 'blue.500',
    height: '100%',
    width: '100%',
  },
})

export default ChakraSpinner
