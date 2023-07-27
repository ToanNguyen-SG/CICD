import React, { useState } from 'react'
// import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import DropDownMenu from '@/components/dropdownMenu'
import { useRouter, usePathname } from 'next/navigation'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'
export default function Navbar() {
  const [langue, setLanguage] = useState('vi')
  const pathName = usePathname()
  const { t, i18n } = useTranslation()
  const [dropDrownHidden, setDropDrownHidden] = useState(false)

  const selectLanguage = [
    {
      label: (
        <div className='flex  text-[16px] '>
          <img className='mr-2' src='/icons/VietNam.svg' /> Vietnamese
        </div>
      ),
      value: 'vi',
    },
    {
      label: (
        <div className='flex   text-[16px] '>
          <img className='mr-2' src='/icons/english.svg' /> English
        </div>
      ),
      value: 'en',
    },
    {
      label: (
        <div className='flex  text-[16px] '>
          <img className='mr-2' src='/icons/laos.svg' /> Laos
        </div>
      ),
      value: 'laos',
    },
  ]

  const handleChange = (value: string) => {
    console.log(value)

    i18n.changeLanguage(value)
    setLanguage(value)
  }
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
      className='flex justify-between w-full h-full  items-center mt-8 '>
      <div style={{ flex: 2, marginLeft: 60 }}>
        <img src='image/logo.svg' />
      </div>

      <div style={{ flex: 6, paddingLeft: '8%' }} className='flex'>
        <div className='flex-1 '>
          <Link
            activeClass='active'
            to='Home'
            className='text-[#17C5C5] text-[20px] border-b-1 border-solid border-teal-500'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            {t('header.home')}
          </Link>
        </div>
        <div className='flex-1 '>
          <Link
            activeClass='active'
            to='About'
            className='text-[#17C5C5] text-[20px] border-b-1 border-solid border-teal-500'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            About
          </Link>
        </div>

        <div className='flex-1 '>
          <span
            onClick={() => setDropDrownHidden(!dropDrownHidden)}
            className='text-[#17C5C5] cursor-pointer text-[20px] border-b-1 border-solid border-teal-500'>
            Services
          </span>
          {dropDrownHidden && <DropDownMenu />}
        </div>
        <div className='flex-1 '>
          <Link
            activeClass='active'
            to='Project'
            className='text-[#17C5C5] text-[20px] border-b-1 border-solid border-teal-500 '
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            Project
          </Link>
        </div>
        <div className='flex-1 '>
          <Link
            activeClass='active'
            to='Home'
            className='text-[#17C5C5] text-[20px] border-b-1 border-solid border-teal-500'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            Blog
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center' style={{ backgroundColor: 'black' }}>
        <Select
          className='text-[16px]'
          style={{ width: 133, height: 30, backgroundColor: 'black' }}
          options={selectLanguage}
          onChange={handleChange}
          value={langue}
        />
      </div>

      <div className='flex justify-end items-center' style={{ flex: 2, display: 'flex' }}>
        <div
          style={{
            border: '1px solid #17C5C5',
            borderRadius: '50%',
          }}
          className='text-[#17C5C5] w-[59px] h-[59px] flex items-center justify-center mr-24'>
          <img src='icons/Vector.svg' />
        </div>
      </div>
    </div>
  )
}
