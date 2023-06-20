'use client'

import { Avatar, Box, Divider, Flex, Text, VStack, Icon } from '@chakra-ui/react'
import { CodeOutlined, DashboardOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons'
import { HamburgerIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation'
import Collapser from './Collapser'
import Logo from '../logo/Logo'
import React from 'react'
import Link from 'next/link'

type Props = {
  getDisclosureProps: (props?: any) => any
  isOpen: boolean
}

const SideBar = ({ getDisclosureProps, isOpen }: Props) => {
  const pathname = usePathname()

  return (
    <Collapser getDisclosureProps={getDisclosureProps} isOpen={isOpen}>
      <VStack spacing={24} borderRight={'1px solid'} borderRightColor={'secondary.200'}>
        <Box w={'full'}>
          <Box>
            <Box>
              <Flex m={'25px'}>
                <Logo hw={30} />
                <Text fontWeight={800} fontSize={'xl'} ml={2}>
                  SchoolEase
                </Text>
              </Flex>
              <Box bgColor={'secondary.lighter'} mb={5} mx={4} py={6} px={5} borderRadius={'md'}>
                <Flex justify={'space-between'} align={'center'}>
                  <Flex align={'center'}>
                    <Avatar src="/imgs/avatar.png" size={'sm'} />
                    <Box ml={2} fontSize={'sm'}>
                      <Text mb={'-1'}>Admin</Text>
                      <Text color={'secondary.main'}>Lotus Valley</Text>
                    </Box>
                  </Flex>
                  <HamburgerIcon />
                </Flex>
              </Box>
            </Box>
            <Divider my={'10px'} />
            <Box>
              {/* HOME */}
              <Link href="/">
                <Flex
                  px={'25px'}
                  h={'44px'}
                  align={'center'}
                  _hover={{ bgColor: 'primary.lighter' }}
                  bgColor={pathname === '/' ? 'primary.lighter' : ''}
                  borderRight={pathname === '/' ? '2px solid' : ''}
                  borderRightColor={'primary.main'}
                >
                  <Icon as={HomeOutlined} color={pathname === '/' ? 'primary.main' : ''} />
                  <Text ml={2.5} color={pathname === '/' ? 'primary.main' : ''}>
                    Home
                  </Text>
                </Flex>
              </Link>

              {/* DASHBOARD */}
              <Link href="/dashboard">
                <Flex
                  px={'25px'}
                  h={'44px'}
                  align={'center'}
                  _hover={{ bgColor: 'primary.lighter' }}
                  bgColor={pathname.startsWith('/dashboard') ? 'primary.lighter' : ''}
                  borderRight={pathname.startsWith('/dashboard') ? '2px solid' : ''}
                  borderRightColor={'primary.main'}
                >
                  <Icon
                    as={DashboardOutlined}
                    color={pathname.startsWith('/dashboard') ? 'primary.main' : ''}
                  />
                  <Text ml={2.5} color={pathname.startsWith('/dashboard') ? 'primary.main' : ''}>
                    Dashboard
                  </Text>
                </Flex>
              </Link>

              <Text
                fontWeight={600}
                fontSize={'sm'}
                letterSpacing={'tight'}
                p={'6px 25px'}
                bgColor={'secondary.lighter'}
                my={2}
              >
                NAVIGATION
              </Text>

              {/* TEACHERS */}
              <Flex px={'25px'} h={'44px'} align={'center'} _hover={{ bgColor: 'primary.lighter' }}>
                <Icon as={TeamOutlined} />
                <Text ml={2.5}>Teachers</Text>
              </Flex>

              {/* STUDENTS */}
              <Flex px={'25px'} h={'44px'} align={'center'} _hover={{ bgColor: 'primary.lighter' }}>
                <Icon as={TeamOutlined} />
                <Text ml={2.5}>Students</Text>
              </Flex>

              {/* CLASSES */}
              <Flex px={'25px'} h={'44px'} align={'center'} _hover={{ bgColor: 'primary.lighter' }}>
                <Icon as={CodeOutlined} />
                <Text ml={2.5}>Classes</Text>
              </Flex>
            </Box>
          </Box>
          <Box>Contacts</Box>
        </Box>
        <Box w={'full'}>Setting and Color Mode</Box>
      </VStack>
    </Collapser>
  )
}

export default SideBar
