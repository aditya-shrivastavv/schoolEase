'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useDisclosure } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const Collapser = ({ children }: Props) => {
  const { getDisclosureProps, getButtonProps, isOpen } = useDisclosure()
  const [hidden, setHidden] = useState(!isOpen)

  return (
    <>
      <button {...getButtonProps()}>Toggle</button>
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
          // position: 'absolute',
          // left: '0',
          height: '100vh',
          // top: '0',
        }}
      >
        welcome home
        {children}
      </motion.div>
    </>
  )
}

export default Collapser

// {/* <button {...getButtonProps()}>Toggle</button> */}
