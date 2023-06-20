'use client'

import { Avatar, Box, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Collapser from './Collapser'
import Logo from '../logo/Logo'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  getDisclosureProps: (props?: any) => any
  isOpen: boolean
}

const SideBar = ({ getDisclosureProps, isOpen }: Props) => {
  return (
    <Collapser getDisclosureProps={getDisclosureProps} isOpen={isOpen}>
      <VStack spacing={24} borderRight={'1px solid'} borderRightColor={'secondary.200'}>
        <Box w={'full'}>
          <Box>
            <Box>
              <Flex m={'25px'}>
                <Logo hw={28} />
                <Text fontWeight={600} fontSize={'xl'} ml={2}>
                  SchoolEase
                </Text>
              </Flex>
              <Box bgColor={'secondary.lighter'} mb={5} mx={4} py={6} px={5} borderRadius={'md'}>
                <Flex justify={'space-between'} align={'center'}>
                  <Flex>
                    <Avatar src="/imgs/avatar.png" size={'md'} />
                    <Box ml={2}>
                      <Text>Admin</Text>
                      <Text color={'secondary.main'}>Lotus Valley</Text>
                    </Box>
                  </Flex>
                  <HamburgerIcon />
                </Flex>
              </Box>
            </Box>
            <Divider />
            <Box>Menu Topic</Box>
            <Box>Menu Container</Box>
          </Box>
          <Box>Contacts</Box>
        </Box>
        <Box w={'full'}>Setting and Color Mode</Box>
      </VStack>
    </Collapser>
  )
}

export default SideBar
