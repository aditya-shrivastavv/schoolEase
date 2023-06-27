import { atom } from 'recoil'

interface EditTeacherData {
  name: string
  email: string
  classes: string[]
}

export interface EditTeacherModalStateProps {
  open: boolean
  teacherData?: EditTeacherData
}

const defaultModalState: EditTeacherModalStateProps = {
  open: false,
}

export const editTeacherModalAtom = atom<EditTeacherModalStateProps>({
  key: 'editTeacherModal',
  default: defaultModalState,
})
