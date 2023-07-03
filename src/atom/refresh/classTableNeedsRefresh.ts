import { atom } from 'recoil'

type classTableNeedsRefreshProps = {
  count: number
}

const defaultState: classTableNeedsRefreshProps = {
  count: 0,
}

export const classTableNeedsRefresh = atom<classTableNeedsRefreshProps>({
  key: 'classCreatedAtom',
  default: defaultState,
})
