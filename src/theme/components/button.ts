import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      bg: 'primary.main',
      color: 'secondary.100',
      _hover: {
        bg: 'primary.400',
      },
    },
  },
}
