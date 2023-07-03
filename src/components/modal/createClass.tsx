'use client'

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
import { useRecoilState, useSetRecoilState } from 'recoil'
import { errorToast, teacherAddedToast } from '../toast/toast'
import { createClass } from '@/actions/classActions'
import { classCreatedAtom } from '@/atom/refresh/classCreated'

const isValidClassName = (className: string) => {
  return className.includes('-') && !className.startsWith('-') && !className.endsWith('-')
}

/**
 * Modal for creating a new class.
 */
export default function CreateClassModal() {
  const toast = useToast()
  const [{ open }, setIsOpen] = useRecoilState(createClassModalAtom)
  const setRefresh = useSetRecoilState(classCreatedAtom)

  // HOOK FORM
  const { register, handleSubmit, formState, reset, setError, setFocus } = useForm({
    defaultValues: {
      name: '',
    },
  })

  useEffect(() => {
    if (open) {
      // because it takes a while for the modal to open, we need to wait a bit before setting focus
      setTimeout(() => {
        setFocus('name')
      }, 100)
    }
  }, [open, setFocus])

  async function onSubmit(formData: { name: string }) {
    if (!isValidClassName(formData.name)) {
      setError('name', { message: 'Invalid class Name, name must include a dash.' })
      return
    }
    try {
      const status = await createClass(formData)
      if (status) {
        setRefresh((prev) => ({ ...prev, count: prev.count + 1 }))
        teacherAddedToast(toast, 'Class added successfully')
        reset()
        return status
      }
      return new Promise((resolve) => {
        errorToast(toast, 'Error adding class')
        resolve(
          setError('name', {
            message: 'Error Creating Class: Maybe a class with that name already exists?',
          })
        )
      })
    } catch (error) {
      return new Promise(
        (resolve) => resolve(setError('name', { message: 'Error Creating Class In Database.' }))
        // TODO: Custom error message for duplicate class name
      )
    }
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
