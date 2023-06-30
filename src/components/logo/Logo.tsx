import Image from 'next/image'
import React from 'react'

/**
 * Reusable Logo returning component
 * @param squareSideLength : number
 * @returns NextJS Image JSX.Element
 */
const Logo = ({ squareSideLength }: { squareSideLength: number }) => {
  return (
    <Image width={squareSideLength} height={squareSideLength} src="/imgs/logo.svg" alt="logo" />
  )
}

export default Logo
