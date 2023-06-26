'use client'

import React from 'react'
import {
  Button,
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
import { useRecoilState } from 'recoil'
import { editTeacherModalAtom } from '@/atom/editTeacherModalAtom'

const EditTeacherModal = () => {
  const initialRef = React.useRef(null)
  const [{ open }, setIsOpen] = useRecoilState(editTeacherModalAtom)

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={open} onClose={() => setIsOpen({ open: false })}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => setIsOpen({ open: false })}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditTeacherModal
