import Image from 'next/image'
import React from 'react'

const Logo = ({ squareSideLength }: { squareSideLength: number }) => {
  return (
    <Image width={squareSideLength} height={squareSideLength} src="/imgs/logo.svg" alt="logo" />
  )
}

export default Logo
