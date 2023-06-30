'use client'

import React from 'react'
import SideBar from '@/components/sidebar/SideBar'
import HeadBar from '@/components/headbar/HeadBar'
import { Box, Flex } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { sidebarAtom } from '@/atom/sidebarState'
import EditTeacherModal from '@/components/modal/editTeacher'
import CreateTeacherModal from '@/components/modal/createTeacher'
import CreateClassModal from '@/components/modal/createClass'

type Props = {
  children: React.ReactNode
}

const ExtendedLayout = ({ children }: Props) => {
  const sidebarState = useRecoilValue(sidebarAtom)

  return (
    <>
      {/* MODALS */}
      <>
        <CreateTeacherModal />
        <EditTeacherModal />
        <CreateClassModal />
      </>
      <Flex>
        <SideBar />
        <Box
          width={'100%'}
          pl={sidebarState.open ? '260px' : '0px'}
          style={{
            transition: 'padding-left 0.2s ease-in-out',
          }}
        >
          <HeadBar />
          <Box p={'22px'} pt={'78px'} bgColor={'secondary.lighter'} minH={'100vh'}>
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default ExtendedLayout
