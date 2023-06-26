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
  useToast,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { CreateTeacherModalAtom } from '@/atom/createTeacherModalAtom'
import { useForm } from 'react-hook-form'

const CreateTeacherModal = () => {
  const toast = useToast()
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      classes: '',
    },
  })
  const [{ open }, setIsOpen] = useRecoilState(CreateTeacherModalAtom)
  function onSubmit(data: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data))
      }, 2000)
    })
  }

  if (formState.isSubmitted && formState.isSubmitSuccessful) {
    toast({
      title: 'Success!',
      description: "We've added the teacher for you.",
      status: 'success',
      duration: 6000,
      position: 'top-right',
      variant: 'top-accent',
      isClosable: true,
    })
    reset()
  } else if (formState.isSubmitted && !formState.isSubmitSuccessful) {
    toast({
      title: 'Error!',
      description: 'Some Unexpected error occured.',
      status: 'error',
      duration: 6000,
      position: 'top-right',
      variant: 'top-accent',
      isClosable: true,
    })
  }

  return (
    <>
      <Modal isOpen={open} size={'xl'} onClose={() => setIsOpen({ open: false })}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add Teacher</ModalHeader>
            <ModalCloseButton onClick={() => reset()} />
            <ModalBody mb={6}>
              <Flex gap={3} align={'center'}>
                {/* FIRST NAME */}
                <FormControl isRequired flexBasis={'50%'}>
                  <FormLabel>First name</FormLabel>
                  <Input {...register('firstName')} variant={'filled'} placeholder="First name" />
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
              <Button
                colorScheme="blue"
                mr={3}
                px={6}
                borderRadius={'full'}
                type="submit"
                isDisabled={!formState.isDirty}
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  reset()
                  setIsOpen({ open: false })
                }}
                px={6}
                borderRadius={'full'}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  )
}

export default CreateTeacherModal
