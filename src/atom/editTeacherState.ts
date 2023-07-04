import { atom } from 'recoil'

export type EditTeacherModalProps = {
  open: boolean
  teacherData: TeacherFormData
}

const defaultModalState: EditTeacherModalProps = {
  open: false,
  teacherData: { id: -0, name: '', email: '', classes: [{ label: '', value: '', color: '' }] },
}

export const editTeacherModalAtom = atom<EditTeacherModalProps>({
  key: 'editTeacherModalAtom',
  default: defaultModalState,
})
