import { atom } from 'recoil'

export interface EditTeacherModalProps {
  open: boolean
  teacherData?: {
    name: string
    email: string
    classes: string[]
  }
}

const defaultModalState: EditTeacherModalProps = {
  open: false,
}

export const editTeacherModalAtom = atom<EditTeacherModalProps>({
  key: 'editTeacherModalAtom',
  default: defaultModalState,
})
