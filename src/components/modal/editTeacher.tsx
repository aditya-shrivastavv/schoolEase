'use client'

import { editTeacherModalAtom } from '@/atom/editTeacherState'
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
import { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { ActionMeta, StylesConfig } from 'react-select'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'
import { classList } from '@/db/sample'
import selectStyles from '../select/styles/selectStyles'
import { getClassSelectOptions } from '@/actions/classActions'

const EditTeacherModal = () => {
  const [{ open, teacherData }, setIsOpen] = useRecoilState(editTeacherModalAtom)
  const animatedComponents = makeAnimated()
  const teacherProps = useMemo(
    () => ({
      firstName: teacherData.name.split(' ')[0],
      lastName: teacherData.name.split(' ')[1] ?? '',
      email: teacherData.email,
      classes: teacherData.classes,
    }),
    [teacherData]
  )
  const { register, handleSubmit, reset, formState, control } = useForm<TeacherFormProps>({
    defaultValues: useMemo(() => teacherProps, [teacherProps]),
  })
  useEffect(() => {
    reset(teacherProps)
  }, [reset, teacherProps])

  function onSubmit(data: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data))
      }, 2000)
    })
  }

  const promiseOptions = async (inputText: string) => {
    const options = await getClassSelectOptions()
    return options.filter((option) => option.label?.includes(inputText))
  }

  return (
    <>
      <Modal
        isOpen={open}
        size={'xl'}
        onClose={() => setIsOpen((prev) => ({ ...prev, open: false }))}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Edit Teacher Detail</ModalHeader>
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
                    <AsyncSelect
                      isMulti
                      ref={ref}
                      onBlur={onBlur}
                      name={name}
                      value={value}
                      components={animatedComponents}
                      onChange={
                        onChange as unknown as (
                          newValue: unknown,
                          actionMeta: ActionMeta<unknown>
                        ) => void
                      }
                      closeMenuOnSelect={false}
                      loadOptions={promiseOptions}
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
                Commit Changes
              </Button>
              <Button
                onClick={() => {
                  reset()
                  setIsOpen((prev) => ({ ...prev, open: false }))
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

export default EditTeacherModal
