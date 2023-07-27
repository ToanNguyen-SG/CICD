import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { OurServiceType } from './type'
import fs from 'fs'
import path from 'path'
const prisma = new PrismaClient()

export const POST = async (request: any) => {
  const body: OurServiceType = await request.json()

  await uploadToPublicFolder(body.thumbnailImage, body?.fileName || '')

  try {
    const our = await prisma.our.create({
      data: {
        name: body.name,
        description: body.description,
        createdAt: new Date(),
        typeOur: body.typeOur,
        thumbnailImage: `/dest/${body?.fileName}`,
      },
    })
    return new NextResponse(JSON.stringify(our), { status: 201 })
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 500 })
  }
}

const uploadToPublicFolder = (base64Data: any, fileName: string) => {
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
    const res = await prisma.our.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        items: true,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
