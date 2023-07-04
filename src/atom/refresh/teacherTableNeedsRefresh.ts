import { atom } from 'recoil'

type TeacherTableNeedsRefreshProps = {
  count: number
}

const defaultState: TeacherTableNeedsRefreshProps = {
  count: 0,
}

export const teacherTableNeedsRefresh = atom<TeacherTableNeedsRefreshProps>({
  key: 'teacherCreatedAtom',
  default: defaultState,
})
