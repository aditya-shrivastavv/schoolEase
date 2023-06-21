'use client'

import {
  Box,
  Button,
  Flex,
  Icon,
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

type Props = {
  getButtonProps: (props?: any) => any
  isOpen: boolean
}

const HeadBar = ({ getButtonProps, isOpen }: Props) => {
  return (
    <Box as="nav" p={2} borderBottom={'1px solid'} borderBottomColor={'secondary.200'}>
      <Flex align={'center'} gap={2}>
        <IconButton
          {...getButtonProps()}
          icon={!isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          aria-label="sidebar-toggle"
          variant={'outline'}
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
