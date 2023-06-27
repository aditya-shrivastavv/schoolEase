'use client'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <Box px={5} py={'22px'} bgColor={'secondary.A100'} mt={12}>
      <Flex justify={'space-between'} align={'center'} mb={5}>
        <Text fontWeight={'semibold'}>Overview</Text>
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
        <GridItem
          p={'16px'}
          border={'1px solid'}
          borderRadius={'lg'}
          borderColor={'secondary.200'}
          bgImage={'url("/curves/wave-pink.png")'}
          bgSize={'170%'}
          bgRepeat={'no-repeat'}
          bgPos={'bottom'}
          h={'350px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Image
            src={'/illustrations/teacher.svg'}
            width={1}
            height={1}
            alt="teacher illustration"
            style={{
              width: '100%',
            }}
          />
          <Button
            alignSelf={'end'}
            bgColor={'#fbc3d1'}
            color={'secondary.800'}
            size={'sm'}
            display={'flex'}
            _hover={{ shadow: 'md' }}
          >
            Manage Teachers
          </Button>
        </GridItem>
        <GridItem
          p={'16px'}
          border={'1px solid'}
          borderRadius={'lg'}
          borderColor={'secondary.200'}
          bgImage={'url("/curves/wave-green.png")'}
          bgPos={'bottom'}
          bgSize={'170%'}
          bgRepeat={'no-repeat'}
          h={'350px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Image
            src={'/illustrations/student.svg'}
            width={1}
            height={1}
            alt="teacher illustration"
            style={{
              width: '100%',
            }}
          />
          <Button
            alignSelf={'end'}
            bgColor={'#b9edd8'}
            color={'secondary.800'}
            size={'sm'}
            display={'flex'}
            _hover={{ shadow: 'md' }}
          >
            Manage Students
          </Button>
        </GridItem>
        <GridItem
          p={'16px'}
          border={'1px solid'}
          borderRadius={'lg'}
          borderColor={'secondary.200'}
          bgImage={'url("/curves/wave-yellow.png")'}
          bgPos={'bottom'}
          bgSize={'170%'}
          bgRepeat={'no-repeat'}
          h={'350px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Image
            src={'/illustrations/class.svg'}
            width={1}
            height={1}
            alt="teacher illustration"
            style={{
              width: '100%',
            }}
          />
          <Button
            alignSelf={'end'}
            bgColor={'#feda78'}
            color={'secondary.800'}
            size={'sm'}
            display={'flex'}
            _hover={{ shadow: 'md' }}
          >
            Manage Classes
          </Button>
        </GridItem>
        <GridItem
          p={'16px'}
          border={'1px solid'}
          borderRadius={'lg'}
          borderColor={'secondary.200'}
          bgImage={'url("/curves/wave-blue.png")'}
          bgPos={'bottom'}
          bgSize={'170%'}
          bgRepeat={'no-repeat'}
          h={'350px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Image
            src={'/illustrations/exam.svg'}
            width={1}
            height={1}
            alt="teacher illustration"
            style={{
              width: '100%',
            }}
          />
          <Button
            alignSelf={'end'}
            bgColor={'#c3e7fe'}
            color={'secondary.800'}
            size={'sm'}
            display={'flex'}
            _hover={{ shadow: 'md' }}
          >
            Manage Exams
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Dashboard
