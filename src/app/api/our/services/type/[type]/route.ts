import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// get all project
export const GET = async (_: any, { params }: any) => {
  const { type } = params
  try {
    const res = await prisma.our.findMany({
      where: {
        isDeleted: false,
        typeOur: type,
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
