'use client'

import { sidebarAtom } from '@/atom/sidebarState'
import {
  BellOutlined,
  ClockCircleOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

/**
 * Top level navigation bar visible on all pages having fixed position
 * @returns JSX.Element
 */
const HeadBar = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarAtom)

  return (
    <Box
      as="nav"
      p={2}
      position={'fixed'}
      top={0}
      left={sidebarState.open ? '260px' : '0px'}
      transition={'left 0.2s ease-in-out'}
      right={0}
      bgColor={'secondary.A100'}
      zIndex={100}
      borderBottom={'1px solid'}
      borderBottomColor={'secondary.200'}
    >
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
