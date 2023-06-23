'use client'

import { Divider, Flex, Heading, Button, Box } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TeachersPage = (props: Props) => {
  return (
    <Box>
      <Divider colorScheme="twitter" />
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
    </Box>
  )
}

export default TeachersPage
