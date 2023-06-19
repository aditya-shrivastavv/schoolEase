'use client'

import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme/theme'
import { RecoilRoot } from 'recoil'

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <RecoilRoot>{children}</RecoilRoot>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
