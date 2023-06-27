'use client'

import { createTeacherModalAtom } from '@/atom/createTeacherModalAtom'
import {
  Box,
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
import { CUIAutoComplete, Item } from 'chakra-ui-autocomplete'
import { useState } from 'react'
import { classList } from '@/db/sample'

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
              <MultiClassSelect />
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

// - - - - - - - - - - - - - - - - - - - - - - //

function MultiClassSelect() {
  const [pickerItems, setPickerItems] = useState(classList)
  const [selectedItems, setSelectedItems] = useState<Item[]>([])

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item])
    setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems)
    }
  }

  return (
    <Box mt={4}>
      <CUIAutoComplete
        label="Select classes"
        placeholder="Type a Country"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        tagStyleProps={{
          rounded: 'full',
          pt: 1,
          pb: 2,
          px: 2,
          fontSize: '1rem',
        }}
        listStyleProps={{
          maxH: '100px',
          overflowY: 'auto',
          position: 'absolute',
          width: '75%',
        }}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
      />
    </Box>
  )
}
