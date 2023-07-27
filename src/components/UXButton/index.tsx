import React, { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
  className?: string
  title?: string
  onClick?: () => void
}

export default function UXButton({ style, className, title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: '#17C5C5', borderRadius: 8, ...style }}
      className={`text-[#FFFF] w-[268px] h-[65px] ${className}`}>
      {title || 'Request quotation'}
    </button>
  )
}
