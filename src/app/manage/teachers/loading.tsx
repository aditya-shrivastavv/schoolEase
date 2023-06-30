'use client'

import React from 'react'
import { Spinner } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
    >
      <Spinner color="blue.500" size="xl" />
    </div>
  )
}

export default LoadingPage
