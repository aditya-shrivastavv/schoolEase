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
  const [hidden, setHidden] = useState(!isOpen)
  const sidebarBgColor = useColorModeValue('secondary.A100', 'secondary.A300')

  return (
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(!isOpen)}
      animate={{ width: isOpen ? '260px' : 0 }}
      style={{
        overflow: 'auto',
        whiteSpace: 'nowrap',
        height: '100vh',
        backgroundColor: sidebarBgColor,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Collapser
