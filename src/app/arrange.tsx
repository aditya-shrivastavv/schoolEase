'use client'

import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Arrange = ({ children }: Props) => {
  return <Flex>{children}</Flex>
}

export default Arrange
