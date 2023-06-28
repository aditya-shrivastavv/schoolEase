'use client'

import { createTeacherModalAtom } from '@/atom/createTeacherModalAtom'
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
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import Select, { StylesConfig } from 'react-select'
import { classList } from '@/db/sample'
import chroma from 'chroma-js'

const classesStyles: StylesConfig<(typeof classList)[0], true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? '#E8E8E8'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: '#E8E8E8',
      },
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#E8E8E8',
      },
    }
  },
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: data.color,
  }),
  // multiValueLabel: (styles, { data }) => ({
  //   ...styles,
  //   // color: data.color,
  // }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    ':hover': {
      backgroundColor: data.color,
      color: '#555555',
    },
  }),
}

const CreateTeacherModal = () => {
  const toast = useToast()
  const [{ open }, setIsOpen] = useRecoilState(createTeacherModalAtom)
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      classes: '',
    },
  })
  if (formState.isSubmitted && formState.isSubmitSuccessful) {
    teacherAddedToast(toast)
    reset()
  }
  if (formState.isSubmitted && !formState.isSubmitSuccessful) {
    errorToast(toast)
  }

  function onSubmit(data: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data))
      }, 2000)
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
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  options={classList}
                  styles={classesStyles}
                />
              </FormControl>
              {/* <Input {...register('classes')} variant={'filled'} placeholder="Assigned classes" /> */}

              {/* <FormControl mt={4}>
                <FormLabel>Assigned Classes</FormLabel>
                <Input {...register('classes')} variant={'filled'} placeholder="Assigned classes" />
              </FormControl> */}
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

function teacherAddedToast(toast: any) {
  toast({
    title: 'Success!',
    description: "We've added the teacher for you.",
    status: 'success',
    duration: 6000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
function errorToast(toast: any) {
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
