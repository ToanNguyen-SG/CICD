import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// delete by id
export const DELETE = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const pro = await prisma.project.findFirst({
      where: {
        id,
      },
    })

    if (!pro) {
      throw new NextResponse('Project Not found!!!', { status: 201 })
    }

    await prisma.project.delete({
      where: {
        id,
      },
    })

    return new NextResponse('Delete successfully!!!', { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get by id
export const GET = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const pro = await prisma.project.findFirst({
      where: {
        id,
      },
    })

    if (!pro) {
      throw new NextResponse('Project Not found!!!', { status: 201 })
    }

    return new NextResponse(JSON.stringify(pro), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
