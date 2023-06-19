'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  getButtonProps: (props?: any) => any
}

const HeadBar = ({ getButtonProps }: Props) => {
  return <Button {...getButtonProps()}>Toggle Sidebar</Button>
}

export default HeadBar
