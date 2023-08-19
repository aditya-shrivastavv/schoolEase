'use client'

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Root() {
  return (
    <Box>
      <Box position={'relative'} h={56} bgColor={'primary.lighter'} overflow={'hidden'}>
        <Image
          alt="curve"
          src={'/curves/wave-low.svg'}
          width={550}
          height={500}
          style={{ position: 'absolute', bottom: 10, left: 0, rotate: '5deg', scale: 1.5 }}
        />
        <Image
          alt="curve" 
          src={'/curves/wave-up.svg'}
          width={550}
          height={500}
          style={{
            position: 'absolute',
            top: 0,
            right: -80,
          }}
        />
        <Flex mx={32} h={'full'} justify={'space-around'} align={'center'} zIndex={10}>
          <Box>
            <Text as={'h1'} fontSize={'3xl'} color={'secondary.700'} mb={2}>
              Welcome to <span style={{ fontWeight: 'bold' }}>SchoolEase</span>
            </Text>
            <Button>Go to Dashboard</Button>
          </Box>
          <Image
            src={'/imgs/management-illustration.svg'}
            width={250}
            height={200}
            alt="illustration"
            style={{
              marginRight: 60,
            }}
          />
        </Flex>
      </Box>
    </Box>
  )
}
