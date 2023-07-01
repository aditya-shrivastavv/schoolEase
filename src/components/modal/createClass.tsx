import { createClassModalAtom } from '@/atom/createClassState'
import {
  Button,
  Code,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { errorToast, teacherAddedToast } from '../toast/toast'

type Props = {}
const classNameRegex = /^\d+-[A-Z][a-z]*$/
const isValidClassName = (className: string) => {
  return classNameRegex.test(className)
}

const CreateClassModal = (props: Props) => {
  const toast = useToast()
  const [{ open }, setIsOpen] = useRecoilState(createClassModalAtom)
  const { register, handleSubmit, formState, reset, setError } = useForm({
    defaultValues: {
      name: '',
    },
  })
  useEffect(() => {
    if (formState.isSubmitted && formState.isSubmitSuccessful) {
      teacherAddedToast(toast, 'Class added successfully')
      reset()
    }
    if (formState.isSubmitted && !formState.isSubmitSuccessful) {
      errorToast(toast, 'Error adding class')
    }
  }, [formState.isSubmitted, formState.isSubmitSuccessful, reset, toast])
  function onSubmit(data: any) {
    if (!isValidClassName(data.name)) {
      return new Promise((resolve) => {
        resolve(setError('name', { message: 'Invalid class name' }))
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data))
      }, 2000)
    })
  }

  return (
    <>
      <Modal isOpen={open} onClose={() => setIsOpen({ open: false })} size="xl">
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add Teacher</ModalHeader>
            <ModalCloseButton onClick={() => reset()} />
            <ModalBody mb={6}>
              <FormControl isRequired isInvalid={!formState.isValid}>
                <FormLabel>Class Name</FormLabel>
                <Input {...register('name')} variant={'filled'} placeholder="Class name" />
                <FormHelperText>
                  Please type the name in a format similar to <Code>10-Rose</Code> i.e. with a dash.
                </FormHelperText>
                {formState.errors.name && (
                  <FormErrorMessage>{formState.errors.name.message}</FormErrorMessage>
                )}
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

export default CreateClassModal
