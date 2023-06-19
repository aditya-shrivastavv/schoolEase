'use client'

import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import Collapser from './Collapser'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <Collapser>
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
