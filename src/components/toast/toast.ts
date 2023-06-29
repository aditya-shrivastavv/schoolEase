import { Toast, useToast } from '@chakra-ui/react'

export function teacherAddedToast(toast: typeof Toast) {
  toast({
    title: 'Success!',
    description: "We've added the teacher for you.",
    status: 'success',
    duration: 5000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
export function errorToast(toast: typeof Toast) {
  toast({
    title: 'Error!',
    description: 'Some Unexpected error occured.',
    status: 'error',
    duration: 5000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
export function multipleRowEditToastWarn(toast: typeof Toast) {
  toast({
    title: 'Invalid Operation!',
    description: 'Please select a single row to edit.',
    status: 'warning',
    duration: 4000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
