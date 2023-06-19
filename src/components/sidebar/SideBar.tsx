'use client'

import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import Collapser from './Collapser'

type Props = {
  getDisclosureProps: (props?: any) => any
  isOpen: boolean
}

const SideBar = ({ getDisclosureProps, isOpen }: Props) => {
  return (
    <Collapser getDisclosureProps={getDisclosureProps} isOpen={isOpen}>
      <VStack>
        <Box>
          <Box></Box>
        </Box>
        <Center>Contacts</Center>
      </VStack>
    </Collapser>
  )
}

export default SideBar
