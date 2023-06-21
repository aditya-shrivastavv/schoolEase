'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  getDisclosureProps: (props?: any) => any
  isOpen: boolean
}

const Collapser = ({ children, getDisclosureProps, isOpen }: Props) => {
  const [hidden, setHidden] = useState(isOpen)
  const sidebarBgColor = useColorModeValue('secondary.A100', 'secondary.A300')

  return (
    <motion.div
      {...getDisclosureProps()}
      id="sidebar"
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(isOpen)}
      animate={{ width: !isOpen ? '260px' : 0 }}
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
