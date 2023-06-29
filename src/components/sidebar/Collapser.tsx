'use client'

import { sidebarAtom } from '@/atom/sidebarState'
import { useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

type Props = {
  children: React.ReactNode
}

const Collapser = ({ children }: Props) => {
  const sidebarBgColor = useColorModeValue('secondary.A100', 'secondary.A300')
  const sidebarState = useRecoilValue(sidebarAtom)

  return (
    <motion.div
      id="sidebar"
      hidden={!sidebarState.open}
      initial={false}
      animate={{ width: sidebarState.open ? '260px' : 0 }}
      style={{
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: sidebarBgColor,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Collapser
