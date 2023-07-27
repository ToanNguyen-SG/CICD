import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import UXButton from '../UXButton'

pdfMake.vfs = pdfFonts.pdfMake.vfs

type Props = {
  jsonData: any
}
export default function DownloadPDF({ jsonData }: Props) {
  const createAndDownloadPDF = () => {
    const documentDefinition: any = {
      content: [
        {
          text: 'Dữ liệu JSON được chuyển thành file PDF',
          style: 'header',
        },
        {
          text: JSON.stringify(jsonData, null, 2),
          style: 'json',
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        json: {
          fontSize: 14,
        },
      },
    }

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition)
    pdfDocGenerator.download('data.pdf')
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }} className='flex flex-col items-center'>
      <div className='text-[#17C5C5] text-[40px] w-[878px] text-center'>
        Thanks for using our quote calculator - you'll receive it in an email instantly!
      </div>
      <div className='text-[#FFF] text-[18px] w-[878px] text-center'>
        Don't forget to check your junk! If you'd like to book a call with a member of the team,
        find a time to suit you here.
      </div>
      <img className='mt-[50px]' src='/icons/pdfIcon.svg' />
      <UXButton className='mt-[30px]' onClick={createAndDownloadPDF} title='Tải xuống PDF' />
    </div>
  )
}
