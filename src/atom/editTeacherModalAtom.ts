import { atom } from 'recoil'

export interface EditTeacherModalStateProps {
  open: boolean
}

const defaultModalState: EditTeacherModalStateProps = {
  open: false,
}

export const editTeacherModalAtom = atom<EditTeacherModalStateProps>({
  key: 'editTeacherModal',
  default: defaultModalState,
})
