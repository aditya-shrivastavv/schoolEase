import { SampleDataType } from '@/db/sample'
import { atom } from 'recoil'

interface TeacherInterface {
  name: string
  email: string
  classes: string[]
}

export interface EditTeacherModalStateProps {
  open: boolean
  teacherData?: TeacherInterface
}

const defaultModalState: EditTeacherModalStateProps = {
  open: false,
}

export const editTeacherModalAtom = atom<EditTeacherModalStateProps>({
  key: 'editTeacherModal',
  default: defaultModalState,
})
