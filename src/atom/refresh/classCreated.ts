import { atom } from 'recoil'

type ClassCreatedProps = {
  count: number
}

const defaultState: ClassCreatedProps = {
  count: 0,
}

export const classCreatedAtom = atom<ClassCreatedProps>({
  key: 'classCreatedAtom',
  default: defaultState,
})
