'use client'

/**
 * IMPORTS
 */
import { createTeacherModalAtom } from '@/atom/createTeacherState'
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
import { Controller, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import Select, { ActionMeta, GroupBase, MultiValue, StylesConfig } from 'react-select'
import { classList } from '@/db/sample'
import { errorToast, teacherAddedToast } from '../toast/toast'
import { useEffect } from 'react'

/**
 * Multi select styles
 */
const selectStyles: StylesConfig<ClassProps, true, GroupBase<ClassProps>> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
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
  const { register, handleSubmit, formState, reset, control } = useForm<TeacherFormProps>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      classes: [],
    },
  })
  useEffect(() => {
    if (formState.isSubmitted && formState.isSubmitSuccessful) {
      teacherAddedToast(toast)
      reset()
    }
    if (formState.isSubmitted && !formState.isSubmitSuccessful) {
      errorToast(toast)
    }
  }, [formState.isSubmitted, formState.isSubmitSuccessful, reset, toast])

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

              <Controller<TeacherFormProps>
                name="classes"
                control={control}
                render={({ field: { onChange, onBlur, ref, name, value }, fieldState }) => (
                  <FormControl mt={4}>
                    <FormLabel>Assigned Classes</FormLabel>
                    <Select
                      isMulti
                      ref={ref}
                      onBlur={onBlur}
                      name={name}
                      value={value}
                      onChange={
                        onChange as unknown as (
                          newValue: MultiValue<unknown>,
                          actionMeta: ActionMeta<unknown>
                        ) => void
                      }
                      closeMenuOnSelect={false}
                      options={classList}
                      styles={selectStyles as StylesConfig}
                    />
                  </FormControl>
                )}
              />
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
