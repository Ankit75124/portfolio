import React from 'react'

type Props = {name: string}

export default function Title({name}: Props) {
  return (
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">{name}</h3>
  )
}

