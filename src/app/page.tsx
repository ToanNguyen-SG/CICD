export default function Home() {
  return (
    <div className='relative w-full h-full '>
      <div className='flex w-full h-full items-center '>
        <div style={{ flex: 1 }} className=' w-[721px] left-16 top-96 p-[80px]'>
          <div className='text-[#17C5C5] mb-8 text-[40px]'>We ponder then design.</div>
          <div className='text-[#FFFFFF] text-[18px]'>
            UXPON stands for the phrase: “UX - PONder”. Means contemplating user experience. With
            the desire that all employees of the company must always actively reflect and always
            reflect to bring a better experience every day to customers.
          </div>
          <div className='mt-8 '>
            <div
              style={{
                width: 268,
                height: 65,
                border: '1px solid #17C5C5',
              }}
              className='text-[18px] rounded-[8px]  text-[#17C5C5] flex items-center justify-center'>
              Contact button
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} className=''>
          <img className='w-4/5 h-4/5 mt-50' src='/image/Voi_pose_3.svg' />
        </div>
      </div>
    </div>
  )
}
