import UXButton from '@/components/UXButton'
import { Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HomePage() {
  const router = useRouter()
  return (
    <Row
      id='Home'
      style={{ width: '100vw', height: '90vh', padding: '0 10%' }}
      className='flex  items-center '>
      <Col span={12}>
        <div className='text-[#17C5C5] mb-8 text-[40px]'>We ponder then design.</div>
        <div className='text-[#FFFFFF] text-[18px]'>
          UXPON stands for the phrase: “UX - PONder”. Means contemplating user experience. With the
          desire that all employees of the company must always actively reflect and always reflect
          to bring a better experience every day to customers.
        </div>
        <div className='mt-8 '>
          <UXButton onClick={() => router.push(`/quote`)} title='Quote Calculator' />
        </div>
      </Col>
      <Col span={12}>
        <img className='w-4/5 h-4/5 mt-50' src='/image/Voi_pose_3.svg' />
      </Col>
    </Row>
  )
}
