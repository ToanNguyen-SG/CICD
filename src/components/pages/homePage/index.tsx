import UXButton from '@/components/UXButton'
import { Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HomePage() {
  const router = useRouter()
  return (
    <Row
      gutter={24}
      id='Home'
      style={{ width: '100vw', height: '90vh', padding: '0 10%' }}
      className='flex  items-center '>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <div className='text-[#17C5C5] mb-8 text-[40px]'>We ponder then design.</div>
        <div className='text-[#FFFFFF] text-[18px]'>
          UXPON stands for the phrase: “UX - PONder”. Means contemplating user experience. With the
          desire that all employees of the company must always actively reflect and always reflect
          to bring a better experience every day to customers.
        </div>
        <div className='mt-8 md:text-center sm:text-center max-[640px]:text-center'>
          <UXButton onClick={() => router.push(`/quote`)} title='Quote Calculator' />
        </div>
      </Col>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <img
          className='md:w-96 md:m-auto sm:m-auto sm:w-50 w-4/5 h-4/5 mt-50 max-[640px]:m-auto'
          src='/image/Voi_pose_3.svg'
        />
      </Col>
    </Row>
  )
}
