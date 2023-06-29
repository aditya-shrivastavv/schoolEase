import { atom } from 'recoil'

export interface CreateTeacherModalProps {
  open: boolean
}

const defaultModalState: CreateTeacherModalProps = {
  open: false,
}

export const createTeacherModalAtom = atom<CreateTeacherModalProps>({
  key: 'createTeacherModalAtom',
  default: defaultModalState,
})
