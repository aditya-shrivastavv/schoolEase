'use client'

import { createTeacherModalAtom } from '@/atom/createTeacherState'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

const TeachersLayout = ({ children }: Props) => {
  const handleCreateTeacherModal = useSetRecoilState(createTeacherModalAtom)

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'} mt={3} mb={5}>
        <Box>
          <Heading size="lg">Teachers Section</Heading>
        </Box>
        <Button
          variant={'outline'}
          rounded={'full'}
          onClick={() => handleCreateTeacherModal({ open: true })}
        >
          Add Teacher
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default TeachersLayout
