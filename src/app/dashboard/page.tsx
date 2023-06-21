'use client'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  Icon,
} from '@chakra-ui/react'
import format from 'date-fns/format'
import Image from 'next/image'
import React from 'react'
import { GiTeacher } from 'react-icons/gi'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Box>
      <Flex my={4} justify={'space-between'} align={'center'}>
        <Box>
          <Heading size={'md'} mb={'10px'}>
            Welcome, Vikram
          </Heading>
          <Text variant={'desc'}>{format(Date.now(), 'EEEE, do LLLL yyyy')}</Text>
        </Box>
        <Button>Button</Button>
      </Flex>
      <Box px={5} py={'22px'} bgColor={'secondary.A100'} mt={12}>
        <Flex justify={'space-between'} align={'center'} mb={5}>
          <Text>Overview</Text>
          <Menu>
            <MenuButton as={Button} variant={'outline'} size={'sm'} rightIcon={<ChevronDownIcon />}>
              View
            </MenuButton>
            <MenuList>
              <MenuItem>Card</MenuItem>
              <MenuItem>List</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={'22px'}>
          <GridItem p={'22px'} border={'1px solid'} borderColor={'secondary.200'}>
            <Flex justify={'space-between'} mb={3}>
              <Icon
                as={GiTeacher}
                fontSize={'5xl'}
                border={'1px solid'}
                borderColor={'secondary.light'}
                p={2}
                borderRadius={'lg'}
              />
              <Image src={'/illustrations/teacher.svg'} width={170} height={170} alt="teacher" />
            </Flex>
            <Flex align={'center'} justify={'space-between'} mb={3}>
              <Text fontSize={'sm'}>Total Teachers :</Text>
              <Text fontWeight={'extrabold'}>78</Text>
            </Flex>
            <Button variant={'solid'} size={'xs'} borderRadius={'full'} w={'full'}>
              Manage Teachers
            </Button>
          </GridItem>
          <GridItem w="100%" bg="primary.200" />
          <GridItem w="100%" bg="primary.200" />
          <GridItem w="100%" bg="primary.200" />
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
