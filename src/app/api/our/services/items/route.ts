import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { OurItemsType } from './type'
import fs from 'fs'
import path from 'path'
const prisma = new PrismaClient()

export const POST = async (request: any) => {
  const body: OurItemsType = await request.json()

  const { image, fileName } = body

  try {
    uploadToPublicFolder(image, fileName)

    const our = await prisma.ourItems.create({
      data: {
        name: body.name,
        description: body.description,
        image: `/dest/${fileName}`,
        ourId: body.ourId,
        createdAt: new Date(),
      },
    })
    return new NextResponse(JSON.stringify(our), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error ', { status: 500 })
  }
}

export const uploadToPublicFolder = (base64Data: any, fileName: string) => {
  const filePath = path.join(process.cwd(), 'public/dest', fileName)
  const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, '')
  const buffer = Buffer.from(base64Image, 'base64')

  fs.writeFile(filePath, buffer, err => {
    if (err) {
      console.error('Error writing the file:', err)
    } else {
      console.log('File uploaded successfully!')
    }
  })
}
// get all project
export const GET = async () => {
  try {
    const res = await prisma.our.findMany()

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
