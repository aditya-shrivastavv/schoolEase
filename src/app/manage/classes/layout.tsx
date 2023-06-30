'use client'

import { createClassModalAtom } from '@/atom/createClassState'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

const ClassPageLayout = ({ children }: Props) => {
  const handleCreateClassModal = useSetRecoilState(createClassModalAtom)

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'} mt={3} mb={5}>
        <Box>
          <Heading size="lg">Classes</Heading>
        </Box>
        <Button
          variant={'outline'}
          rounded={'full'}
          onClick={() => handleCreateClassModal({ open: true })}
        >
          Create Empty Class
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default ClassPageLayout
