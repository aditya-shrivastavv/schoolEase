'use client'

import { createTeacherModalAtom } from '@/atom/createTeacherModalAtom'
import { sampleclasses } from '@/db/sample'
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
import { Control, UseControllerProps, useController, useForm } from 'react-hook-form'
import { Select, OptionBase, Props } from 'chakra-react-select'
import { useRecoilState } from 'recoil'

const classes = sampleclasses
interface ClassesGroup extends OptionBase {
  label: string
  value: string
}
interface FormValues {
  classes: ClassesGroup[]
}

const defaultClassesGroup: FormValues = { classes: [] }

const CreateTeacherModal = () => {
  const toast = useToast()
  const [{ open }, setIsOpen] = useRecoilState(createTeacherModalAtom)
  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      classes: defaultClassesGroup.classes,
    },
  })
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
  }
  if (formState.isSubmitted && !formState.isSubmitSuccessful) {
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
              <ControlledClassSelect
                isMulti
                control={control as unknown as Control<FormValues>}
                name="classes"
                id="classes"
                options={classes}
                placeholder="Classes"
                label="Select Classes"
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

type ControlledClassSelectProps = UseControllerProps<FormValues> & Props & { label: string }

function ControlledClassSelect({
  control,
  name,
  id,
  label,
  rules,
  ...props
}: ControlledClassSelectProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController<FormValues>({
    name,
    control,
    rules,
  })

  return (
    <FormControl py={4} isInvalid={!!error} id={id}>
      <FormLabel>{label}</FormLabel>

      <Select
        isMulti
        // variant={'filled'}
        name={name}
        ref={ref}
        onChange={onChange as (...event: any[]) => void}
        onBlur={onBlur}
        value={value}
        {...props}
      />
    </FormControl>
  )
}

export default CreateTeacherModal
