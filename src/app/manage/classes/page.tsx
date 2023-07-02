'use client'

import React from 'react'
import ClassTable from './classTable'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { createClassModalAtom } from '@/atom/createClassState'

const ClassPage = () => {
  const handleCreateClassModal = useSetRecoilState(createClassModalAtom)

  return (
    <>
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
      <ClassTable />
    </>
  )
}

export default ClassPage
