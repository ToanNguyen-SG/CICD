import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { CategoryQuestionsType } from '../type'

const prisma = new PrismaClient()

// get all project
export const GET = async (_: any, { params }: any) => {
  const { id } = params
  try {
    const res = await prisma.categoryQuestions.findMany({
      include: {
        Questions: true,
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
    const res = await prisma.categoryQuestions.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const PUT = async (request: any, { params }: any) => {
  const body: CategoryQuestionsType = await request.json()
  const { id } = params
  try {
    const res = await prisma.categoryQuestions.update({
      where: {
        id,
      },
      data: {
        content: body?.content,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
