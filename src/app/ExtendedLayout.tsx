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
        <Box
          flexGrow={1}
          ml={!isOpen ? '260px' : '0px'}
          style={{
            transition: 'margin-left 0.2s ease-in-out',
          }}
        >
          <HeadBar getButtonProps={getButtonProps} isOpen={isOpen} />
          <Box p={'22px'} bgColor={'secondary.lighter'} minH={'100vh'}>
            {children}
          </Box>
        </Box>
      </Flex>
    </Providers>
  )
}

export default ExtendedLayout
