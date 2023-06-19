'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  getDisclosureProps: (props?: any) => any
  isOpen: boolean
}

const Collapser = ({ children, getDisclosureProps, isOpen }: Props) => {
  const [hidden, setHidden] = useState(!isOpen)

  return (
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(!isOpen)}
      animate={{ width: isOpen ? '260px' : 0 }}
      style={{
        background: 'red',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        height: '100vh',
      }}
    >
      welcome home
      {children}
    </motion.div>
  )
}

export default Collapser
