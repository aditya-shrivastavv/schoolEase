'use client'

import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

const Underlay = ({ isOpen, children }: Props) => {
  const [hidden, setHidden] = useState(isOpen)

  return (
    <motion.div
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(isOpen)}
      animate={{ width: !isOpen ? '260px' : 0 }}
      style={{
        height: '100vh',
      }}
    >
      {children}
    </motion.div>
  )
}

export default Underlay
