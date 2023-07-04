'use client'

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
import Select, { ActionMeta, MultiValue, StylesConfig } from 'react-select'
import { classList } from '@/db/sample'
import { errorToast, successToast } from '../toast/toast'
import { useEffect } from 'react'
import selectStyles from '../select/styles/selectStyles'
import { createTeacher } from '@/actions/teacherActions'

/**
 * Modal for creating/adding a new teacher
 * @returns JSX.Element
 */
const CreateTeacherModal = () => {
  const toast = useToast()
  const [{ open }, setIsOpen] = useRecoilState(createTeacherModalAtom)
  const { register, handleSubmit, formState, reset, control, setFocus, setError } =
    useForm<TeacherFormProps>({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        classes: undefined,
      },
    })

  useEffect(() => {
    if (open) {
      // because it takes a while for the modal to open, we need to wait a bit before setting focus
      setTimeout(() => {
        setFocus('firstName')
      }, 100)
    }
  }, [open, setFocus])

  async function onSubmit(data: TeacherFormProps) {
    try {
      const status = await createTeacher(data)
      if (status) {
        successToast(toast, 'Teacher added successfully')
        reset()
      }
    } catch (err) {
      errorToast(toast, 'Error adding teacher')
      console.error(err)
    }
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
