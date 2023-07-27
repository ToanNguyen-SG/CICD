import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// get all project
export const GET = async (_: any, { params }: any) => {
  const { id } = params
  try {
    const res = await prisma.request.findFirst({
      where: { id },
      include: {
        requestAnswers: true,
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
    const res = await prisma.request.update({
      where: {
        id,
      },
      data: { isDeleted: true },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
