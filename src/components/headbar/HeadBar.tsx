'use client'

import {
  Box,
  Button,
  Flex,
  Icon,
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
        <Button {...getButtonProps()} bgColor={'secondary.200'} borderRadius={'lg'} p={0}>
          {!isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </Button>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" w={'30'} />
        </InputGroup>
        <Spacer />
        <Button variant="ghost" p={0}>
          <Icon as={ClockCircleOutlined} />
        </Button>
        <Button variant="ghost" p={0}>
          <Icon as={MailOutlined} />
        </Button>
        <Button variant="ghost" p={0}>
          <Icon as={SettingOutlined} />
        </Button>
        <Button variant="ghost" p={0}>
          <Icon as={BellOutlined} />
        </Button>
      </Flex>
    </Box>
  )
}

export default HeadBar
