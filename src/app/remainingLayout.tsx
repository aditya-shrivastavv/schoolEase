'use client'

import React from 'react'
import Providers from './providers'
import Arrange from './arrange'
import SideBar from '@/components/sidebar/SideBar'
import HeadBar from '@/components/headbar/HeadBar'
import { Box } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const RemainingLayout = ({ children }: Props) => {
  return (
    <Providers>
      <Arrange>
        <SideBar />
        <Box>
          <HeadBar />
          {children}
        </Box>
      </Arrange>
    </Providers>
  )
}

export default RemainingLayout
