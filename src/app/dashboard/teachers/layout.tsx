'use client'

import { Divider, Flex, Heading, Button, Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const TeachersLayout = ({ children }: Props) => {
  return (
    <Box>
      <Divider />
      <Flex justify={'space-between'} align={'center'} my={5}>
        <Box>
          <Heading size="lg" fontWeight={'light'}>
            Teachers Section
          </Heading>
        </Box>
        <Button variant={'outline'} rounded={'full'}>
          Add Teacher
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default TeachersLayout
