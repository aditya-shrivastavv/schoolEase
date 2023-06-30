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
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

const EditTeacherModal = () => {
  const [{ open, teacherData }, setIsOpen] = useRecoilState(editTeacherModalAtom)
  const teacherProps = useMemo(
    () => ({
      firstName: teacherData.name.split(' ')[0],
      lastName: teacherData.name.split(' ')[1] ?? '',
      email: teacherData.email,
      classes: teacherData.classes.map((c) => c.value),
    }),
    [teacherData]
  )
  const { register, handleSubmit, reset, formState } = useForm({
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
