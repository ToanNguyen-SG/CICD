import { Col, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  service: { name: string; image: string }[]
}

export default function Services({ service }: Props) {
  const [selected, setSelected] = useState(service[0]?.name || '')

  useEffect(() => {
    setSelected(service[0]?.name)
  }, [service])

  const headerRender = useCallback(() => {
    return (
      <Row className='mt-[33px]' gutter={16}>
        {service.map((i, idx) => (
          <Col key={idx} span={6}>
            <span
              onClick={() => setSelected(i.name)}
              style={i.name === selected ? { borderBottom: '1px solid #17C5C5' } : {}}
              className={`text-[28px] pb-1 text-center ${
                i.name === selected ? 'text-[#17C5C5]' : 'text-[#FFF]'
              }`}>
              {i.name}
            </span>
          </Col>
        ))}
      </Row>
    )
  }, [service, selected])

  return (
    <div className='w-full h-full'>
      {headerRender()}
      <div className='flex justify-center items-center'>
        <img className='w-[525px] h-[525px] ' src={service.find(i => i.name === selected)?.image} />
      </div>
    </div>
  )
}
