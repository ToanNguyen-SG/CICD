import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const res = await prisma.our.findFirst({
      where: { id },
      include: {
        items: {
          where: {
            isDeleted: false,
          },
        },
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const DELETE = async (_: any, { params }: any) => {
  const { id } = params

  try {
    await prisma.our.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    })

    return new NextResponse('delete success', { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
