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

const linkCards = [
  {
    title: 'Manage Teachers',
    bgImgUrl: 'url("/curves/wave-pink.png")',
    illustrationUrl: '/illustrations/teacher.svg',
    illustrationAlt: 'teacher illustration',
    btnBgColor: '#fbc3d1',
  },
  {
    title: 'Manage Students',
    bgImgUrl: 'url("/curves/wave-green.png")',
    illustrationUrl: '/illustrations/student.svg',
    illustrationAlt: 'student illustration',
    btnBgColor: '#b9edd8',
  },
  {
    title: 'Manage Classes',
    bgImgUrl: 'url("/curves/wave-yellow.png")',
    illustrationUrl: '/illustrations/class.svg',
    illustrationAlt: 'class illustration',
    btnBgColor: '#feda78',
  },
  {
    title: 'Manage Exams',
    bgImgUrl: 'url("/curves/wave-blue.png")',
    illustrationUrl: '/illustrations/exam.svg',
    illustrationAlt: 'exam illustration',
    btnBgColor: '#c3e7fe',
  },
]

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
        {linkCards.map((card) => (
          <GridItem
            key={card.title}
            p={'16px'}
            border={'1px solid'}
            borderRadius={'lg'}
            borderColor={'secondary.200'}
            bgImage={card.bgImgUrl}
            bgSize={'170%'}
            bgRepeat={'no-repeat'}
            bgPos={'bottom'}
            h={'350px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Image
              src={card.illustrationUrl}
              width={1}
              height={1}
              alt={card.illustrationAlt}
              style={{
                width: '100%',
              }}
            />
            <Button
              alignSelf={'end'}
              bgColor={card.btnBgColor}
              color={'secondary.800'}
              size={'sm'}
              display={'flex'}
              _hover={{ shadow: 'md' }}
            >
              {card.title}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Dashboard
