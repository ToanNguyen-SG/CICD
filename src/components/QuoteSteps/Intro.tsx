import React from 'react'

export default function Intro() {
  return (
    <div className='flex justify-center items-center flex-col w-full h-full'>
      <div className='text-[#17C5C5] text-[40px]'>UXPON Quote Calculator</div>
      <div className='text-[#FFF] text-center text-[18px]'>
        Answer the following questions and we'll give you a rough quote for your mobile/web app,
        branding or website project. This tool has been designed by the award-winning digital
        agency, UXPPON, making the process of finding a cost estimate for your project as
        frictionless and easy as possible.
      </div>
      <button style={{ width: 286, height: 80 }} className='text-[#17C5C5] text-center'>
        Get my quote
      </button>
      <button className='text-[#17C5C5] text-[18px]'>Back</button>
    </div>
  )
}
