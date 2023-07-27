import React from 'react'

const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '3px 24px',
  minHeight: '60px',
  backgroundColor: '#FBFBFB',
  border: '1px solid #D9D9D9',
  borderRadius: '4px',
}

interface Props {
  title: string | JSX.Element
  value?: string | number | JSX.Element | undefined | null | Array<string | JSX.Element>
  isNormalValue?: boolean
  children?: JSX.Element
  style?: React.CSSProperties
}

function ItemDetailCard({ title, value, isNormalValue, children, style }: Props): JSX.Element {
  return (
    <div
      style={{
        ...bodyStyle,
        ...style,
        wordBreak: 'break-word',
      }}>
      {title}
      <br />
      {isNormalValue ? (
        <span>{value === null || value === undefined ? '--' : value}</span>
      ) : (
        <strong className='break-line-if-too-long'>{value}</strong>
      )}
      {children ? <span>{children}</span> : null}
    </div>
  )
}

export default ItemDetailCard
