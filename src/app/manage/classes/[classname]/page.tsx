'use client'

import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
  params: {
    classname: string
  }
}

const page = ({ params }: Props) => {
  return (
    <Box>
      <Flex gap={4}>
        <Box bgColor={'secondary.A100'} borderRadius={'lg'} p={4} flexBasis={'60%'}>
          <Heading size={'sm'} px={4} py={2}>
            Class details
          </Heading>
          <TableContainer>
            <Table variant={'unstyled'} size={'sm'}>
              <Thead>
                <Tr>
                  <Th w={'35%'}></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td color={'secondary.main'} fontWeight={'semibold'}>
                    Class Name
                  </Td>
                  <Td>{params.classname}</Td>
                </Tr>
                <Tr>
                  <Td color={'secondary.main'} fontWeight={'semibold'}>
                    Section Name
                  </Td>
                  <Td>{params.classname.split('-')[1]}</Td>
                </Tr>
                <Tr>
                  <Td color={'secondary.main'} fontWeight={'semibold'}>
                    Number of Students
                  </Td>
                  <Td>99</Td>
                </Tr>
                <Tr>
                  <Td color={'secondary.main'} fontWeight={'semibold'}>
                    Teachers Associated
                  </Td>
                  <Td>99</Td>
                </Tr>
                <Tr>
                  <Td color={'secondary.main'} fontWeight={'semibold'}>
                    Subjects Taught
                  </Td>
                  <Td>Hindi, English, Maths</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box bgColor={'secondary.A100'} borderRadius={'lg'} p={4} flexBasis={'40%'}>
          <Heading size={'sm'} px={4} py={2}>
            Quick Actions
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}

export default page
