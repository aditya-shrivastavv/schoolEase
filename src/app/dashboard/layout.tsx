'use client'

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import format from 'date-fns/format'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <Box>
      <Flex mt={4} mb={6} justify={'space-between'} align={'center'}>
        <Box>
          <Heading size={'md'} mb={'10px'}>
            Welcome, Vikram
          </Heading>
          <Text variant={'desc'}>{format(Date.now(), 'EEEE, do LLLL yyyy')}</Text>
        </Box>
        <Button rounded={'full'} size={'sm'}>
          Log Out
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default DashboardLayout
