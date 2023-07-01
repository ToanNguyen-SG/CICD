import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// delete by id
export const DELETE = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const pro = await prisma.skills.findFirst({
      where: {
        id,
      },
    })

    if (!pro) {
      throw new NextResponse('Skills Not found!!!', { status: 201 })
    }

    await Promise.all([
      prisma.skills.delete({
        where: {
          id,
        },
      }),
      prisma.skills.deleteMany({
        where: {
          parentId: id,
        },
      }),
    ])

    return new NextResponse('Delete successfully!!!', { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get by id
export const GET = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const pro = await prisma.skills.findFirst({
      where: {
        id,
      },
    })

    if (!pro) {
      throw new NextResponse('Skills Not found!!!', { status: 201 })
    }

    const childs = await prisma.skills.findMany({
      where: {
        parentId: id,
      },
    })

    return new NextResponse(JSON.stringify({ ...pro, childs }), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
