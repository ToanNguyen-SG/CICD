import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { OurItemsType } from './type'

const prisma = new PrismaClient()

export const DELETE = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const ourItem = await prisma.ourItems.findFirst({
      where: {
        id,
      },
    })

    if (!ourItem) {
      throw new NextResponse('Not Found', { status: 404 })
    }

    const res = await prisma.ourItems.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    throw new NextResponse('Database Error', { status: 500 })
  }
}
