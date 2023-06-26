'use client'

import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { CreateTeacherModalAtom } from '@/atom/createTeacherModalAtom'
import { useForm } from 'react-hook-form'

const CreateTeacherModal = () => {
  const initialRef = React.useRef(null)
  const { register, handleSubmit } = useForm()
  const [{ open }, setIsOpen] = useRecoilState(CreateTeacherModalAtom)

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={open}
        size={'xl'}
        onClose={() => setIsOpen({ open: false })}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Teacher</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex gap={3} align={'center'}>
              {/* FIRST NAME */}
              <FormControl isRequired flexBasis={'50%'}>
                <FormLabel>First name</FormLabel>
                <Input
                  {...register('firstName')}
                  variant={'filled'}
                  ref={initialRef}
                  placeholder="First name"
                />
              </FormControl>

              {/* LAST NAME */}
              <FormControl flexBasis={'50%'}>
                <FormLabel>Last name</FormLabel>
                <Input {...register('lastName')} variant={'filled'} placeholder="Last name" />
              </FormControl>
            </Flex>
            {/* EMAIL */}
            <FormControl isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register('email')}
                type="email"
                variant={'filled'}
                placeholder="Enter email"
              />
            </FormControl>

            {/* CLASSES */}
            <FormControl mt={4}>
              <FormLabel>Assigned Classes</FormLabel>
              <Input {...register('classes')} variant={'filled'} placeholder="Assigned classes" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => setIsOpen({ open: false })}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateTeacherModal
