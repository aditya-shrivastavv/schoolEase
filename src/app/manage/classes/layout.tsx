'use client'

import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const ClassPageLayout = ({ children }: Props) => {
  return (
    <Box>
      <Flex justify={'space-between'} align={'center'} mt={3} mb={5}>
        <Box>
          <Heading size="lg">Classes</Heading>
        </Box>
        <Button
          variant={'outline'}
          rounded={'full'}
          onClick={() => console.log('create empty class')}
        >
          Create Empty Class
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default ClassPageLayout
