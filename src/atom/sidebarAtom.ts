import { atom } from 'recoil'

export interface SidebarStateProps {
  open: boolean
}

const defaultSidebarState: SidebarStateProps = {
  open: true,
}

export const sidebarAtom = atom({
  key: 'sidebarAtom',
  default: defaultSidebarState,
})
