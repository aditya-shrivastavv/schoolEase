import { atom } from 'recoil'

export type TeacherData = {
  id: number
  name: string
  email: string
  classes: [ClassProps]
}[]

export type EditTeacherModalProps = {
  open: boolean
  teacherData: TeacherData
}

const defaultModalState: EditTeacherModalProps = {
  open: false,
  teacherData: [{ id: -0, name: '', email: '', classes: [{ label: '', value: '', color: '' }] }],
}

export const editTeacherModalAtom = atom<EditTeacherModalProps>({
  key: 'editTeacherModalAtom',
  default: defaultModalState,
})
