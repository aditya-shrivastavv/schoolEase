'use client'

import React from 'react'
import Providers from './providers'
import SideBar from '@/components/sidebar/SideBar'
import HeadBar from '@/components/headbar/HeadBar'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const ExtendedLayout = ({ children }: Props) => {
  const { getDisclosureProps, getButtonProps, isOpen } = useDisclosure()

  return (
    <Providers>
      <Flex>
        <SideBar getDisclosureProps={getDisclosureProps} isOpen={isOpen} />
        <Box>
          <HeadBar getButtonProps={getButtonProps} />
          {children}
        </Box>
      </Flex>
    </Providers>
  )
}

export default ExtendedLayout
