import { atom } from 'recoil'

export interface CreateTeacherModalStateProps {
  open: boolean
}

const defaultModalState: CreateTeacherModalStateProps = {
  open: false,
}

export const createTeacherModalAtom = atom<CreateTeacherModalStateProps>({
  key: 'createTeacherModal',
  default: defaultModalState,
})
