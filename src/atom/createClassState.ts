import { atom } from 'recoil'

export interface CreateClassModalProps {
  open: boolean
}

const defaultModalState: CreateClassModalProps = {
  open: false,
}

export const createClassModalAtom = atom<CreateClassModalProps>({
  key: 'createClassModalAtom',
  default: defaultModalState,
})
