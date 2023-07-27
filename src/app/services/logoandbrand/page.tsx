import React from 'react'
import './index.css'
export default function LogoAndBrand() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
      }}
      className='background-start'>
      <div style={{ width: '70%', height: '100%' }}>
        <div>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Logo & Brand Indentity</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <div style={{ border: '1px solid #1AA9A9' }} className='mt-8 rounded-[16px]'>
            <img className='rounded-[16px]' src='/logoandbrand/image2.svg' />
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex items-center mb-4'>
            <p className='text-[#17C5C5] text-[40px]'>Branding style guidelines</p>
            <p className='text-[#FFFFFF] text-[18px] ml-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div>
            <img src='/logoandbrand/image3.svg' />
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex items-center mb-4'>
            <p className='text-[#17C5C5] text-[40px]'>Business card design</p>
            <p className='text-[#FFFFFF] text-[18px] ml-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div>
            <img src='/logoandbrand/image1.svg' />
          </div>
        </div>

        <div className='flex w-full justify-center mt-12 '>
          <button
            style={{ border: '1px solid #17C5C5', backgroundColor: '#17C5C5' }}
            className='w-[286px] rounded-[8px] h-[65px] text-[#FFF]'>
            Request quotation
          </button>
        </div>

        <div
          style={{ borderTop: '1px solid #0E4343', fontWeight: 500 }}
          className='flex w-full h-[62px] justify-center items-center mt-14 mb-12 text-[18px] text-[#17C5C5]'>
          Copyright @ 2023, UXPON
        </div>
      </div>
    </div>
  )
}
