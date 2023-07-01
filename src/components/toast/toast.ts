import { Toast } from '@chakra-ui/react'

export function teacherAddedToast(toast: typeof Toast, message: string) {
  toast({
    title: 'Success!',
    description: message,
    status: 'success',
    duration: 4000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
export function errorToast(toast: typeof Toast, message: string) {
  toast({
    title: 'Error!',
    description: message,
    status: 'error',
    duration: 4000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
export function multipleRowEditToastWarn(toast: typeof Toast, message: string) {
  toast({
    title: 'Warning!',
    description: message,
    status: 'warning',
    duration: 4000,
    position: 'top-right',
    variant: 'top-accent',
    isClosable: true,
  })
}
