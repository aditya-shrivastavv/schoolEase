import Image from 'next/image'
import React from 'react'

interface logoProps {
  hw: number
}

const Logo = ({ hw }: logoProps) => {
  return <Image width={hw} height={hw} src="/imgs/logo.svg" alt="logo" />
}

export default Logo
