'use client'

import React from 'react'

type Props = {
  params: {
    classname: string
  }
}

const page = ({ params }: Props) => {
  return (
    <div>
      Specific class page for
      {params.classname}
    </div>
  )
}

export default page
