import React from 'react'

type SkillsType = {
  name: String
  image: String
  items: String[]
}

const skills: SkillsType[] = [
  {
    name: 'UI/UX Design',
    image: 'skillsImage/brain.svg',
    items: ['Game', 'Website', 'Web app', 'Mobile app'],
  },
  {
    name: 'UI/UX Design',
    image: 'skillsImage/brain.svg',
    items: ['Game', 'Website', 'Web app', 'Mobile app'],
  },
  {
    name: 'UI/UX Design',
    image: 'skillsImage/brain.svg',
    items: ['Game', 'Website', 'Web app', 'Mobile app'],
  },
  {
    name: 'UI/UX Design',
    image: 'skillsImage/brain.svg',
    items: ['Game', 'Website', 'Web app', 'Mobile app'],
  },
]

export default function Skills() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div style={{ flex: 4 }} className='flex justify-center items-center h-full'>
        <div className='flex justify-center items-center h-full' style={{ flex: 5 }}>
          <img src='skillsImage/brain.svg' />
        </div>
        <div style={{ flex: 2 }}>
          <div className='text-[40px] text-[#17C5C5] mb-10'>UI/UX Design</div>

          {skills[0].items.map(item => (
            <div className='flex items-center mb-2'>
              <div
                style={{ width: 13, height: 13, borderRadius: '50%', marginRight: 12 }}
                className='w-4 h-4 bg-white '></div>
              <div className='text-[28px] text-[#FFFFFF]'>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <img src='skillsImage/hand.svg' />
      </div>
    </div>
  )
}
