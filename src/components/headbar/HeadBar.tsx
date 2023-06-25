'use client'

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from '@chakra-ui/react'
import {
  BellOutlined,
  ClockCircleOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarAtom } from '@/atom/sidebarAtom'

const HeadBar = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarAtom)

  return (
    <Box as="nav" p={2} borderBottom={'1px solid'} borderBottomColor={'secondary.200'}>
      <Flex align={'center'} gap={2}>
        <IconButton
          icon={sidebarState.open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          aria-label="sidebar-toggle"
          variant={'outline'}
          onClick={() => setSidebarState((prev) => ({ ...prev, open: !prev.open }))}
        />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" w={'30'} />
        </InputGroup>
        <Spacer />
        <IconButton variant="ghost" icon={<ClockCircleOutlined />} aria-label="log" />
        <IconButton variant="ghost" icon={<MailOutlined />} aria-label="messages" />
        <IconButton variant="ghost" icon={<SettingOutlined />} aria-label="settings" />
        <IconButton variant="ghost" icon={<BellOutlined />} aria-label="notifications" />
      </Flex>
    </Box>
  )
}

export default HeadBar
