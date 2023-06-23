'use client'

import {
  CodeOutlined,
  DashboardOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import Logo from '../logo/Logo'
import Collapser from './Collapser'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

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
                      <Text variant={'desc'}>Lotus Valley</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    icon={<HamburgerIcon />}
                    aria-label="hamburgerIcon"
                    variant={'ghost'}
                    size={'sm'}
                  />
                </Flex>
              </Box>
            </Box>
            <Divider my={'10px'} />
            <Box>
              {/* HOME */}
              <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
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
              <Link as={NextLink} _hover={{ textDecoration: 'none' }} href="/dashboard">
                <Flex
                  px={'25px'}
                  h={'44px'}
                  align={'center'}
                  _hover={{ bgColor: 'primary.lighter' }}
                  bgColor={pathname === '/dashboard' ? 'primary.lighter' : ''}
                  borderRight={pathname === '/dashboard' ? '2px solid' : ''}
                  borderRightColor={'primary.main'}
                >
                  <Icon
                    as={DashboardOutlined}
                    color={pathname === '/dashboard' ? 'primary.main' : ''}
                  />
                  <Text ml={2.5} color={pathname === '/dashboard' ? 'primary.main' : ''}>
                    Dashboard
                  </Text>
                </Flex>
              </Link>
              <Text
                fontWeight={'extrabold'}
                fontSize={'xs'}
                letterSpacing={'tight'}
                p={'6px 25px'}
                bgColor={'secondary.100'}
                my={2}
              >
                NAVIGATION
              </Text>
              {/* TEACHERS */}
              <Link as={NextLink} _hover={{ textDecoration: 'none' }} href="/dashboard/teachers">
                <Flex
                  px={'25px'}
                  h={'44px'}
                  align={'center'}
                  _hover={{ bgColor: 'primary.lighter' }}
                  bgColor={pathname === '/dashboard/teachers' ? 'primary.lighter' : ''}
                  borderRight={pathname === '/dashboard/teachers' ? '2px solid' : ''}
                  borderRightColor={'primary.main'}
                >
                  <Icon
                    as={TeamOutlined}
                    color={pathname === '/dashboard/teachers' ? 'primary.main' : ''}
                  />
                  <Text ml={2.5} color={pathname === '/dashboard/teachers' ? 'primary.main' : ''}>
                    Teachers
                  </Text>
                </Flex>
              </Link>
              {/* STUDENTS */}
              <Flex
                px={'25px'}
                h={'44px'}
                align={'center'}
                _hover={{ bgColor: 'primary.lighter' }}
                bgColor={pathname === '/dashboard/students' ? 'primary.lighter' : ''}
                borderRight={pathname === '/dashboard/students' ? '2px solid' : ''}
                borderRightColor={'primary.main'}
              >
                <Icon
                  as={TeamOutlined}
                  color={pathname === '/dashboard/students' ? 'primary.main' : ''}
                />
                <Text ml={2.5} color={pathname === '/dashboard/students' ? 'primary.main' : ''}>
                  Students
                </Text>
              </Flex>
              {/* CLASSES */}
              <Flex px={'25px'} h={'44px'} align={'center'} _hover={{ bgColor: 'primary.lighter' }}>
                <Icon as={CodeOutlined} />
                <Text ml={2.5}>Classes</Text>
              </Flex>
              <Text
                fontWeight={'extrabold'}
                fontSize={'xs'}
                letterSpacing={'tight'}
                p={'6px 25px'}
                bgColor={'secondary.100'}
                my={2}
              >
                OPTIONS
              </Text>
              <Flex px={'25px'} h={'44px'} align={'center'} _hover={{ bgColor: 'primary.lighter' }}>
                <Icon as={SettingOutlined} />
                <Text ml={2.5}>Settings</Text>
              </Flex>
              <ButtonGroup
                w={'full'}
                size="sm"
                isAttached
                variant="outline"
                px={'25px'}
                h={'44px'}
                alignItems={'center'}
              >
                <Button flexGrow={1}>
                  <Icon as={BsFillSunFill} fontSize={'lg'} mr={1} />
                  Light
                </Button>
                <Button flexGrow={1}>
                  <Icon as={BsFillMoonFill} fontSize={'lg'} mr={1} />
                  Dark
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
        <Box p={5}>
          <ContactDeveloper />
        </Box>
      </VStack>
    </Collapser>
  )
}

function ContactDeveloper() {
  return (
    <Card bgColor={'secondary.lighter'} mt={3}>
      <CardHeader>
        <Heading size="sm" textAlign={'center'}>
          Contact Developer
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src="/imgs/working-with-laptop.svg" width={200} height={200} alt="developer" />
      </CardBody>
      <CardFooter display={'flex'} justify={'space-evenly'}>
        <Button p={0} variant={'outline'}>
          <Image src={'/imgs/github.gif'} width={28} height={28} alt="github" />
        </Button>
        <Button p={0} variant={'outline'}>
          <Image src={'/imgs/linkedin.svg'} width={28} height={28} alt="github" />
        </Button>
        <Button p={0} variant={'outline'}>
          <Image src={'/imgs/instagram.gif'} width={28} height={28} alt="github" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SideBar
