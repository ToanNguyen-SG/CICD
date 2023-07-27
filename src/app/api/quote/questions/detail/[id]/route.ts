import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { QuestionsTypeUpdate } from './type'

const prisma = new PrismaClient()

export const GET = async (_: any, { params }: any) => {
  const { id } = params

  try {
    const res = await prisma.questions.findFirst({
      where: {
        id,
      },
      include: {
        answers: true,
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
    await prisma.questions.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    })

    return new NextResponse(JSON.stringify({ message: 'delete success' }), { status: 201 })
  } catch (err) {
    throw new NextResponse('Database Error', { status: 500 })
  }
}

export const PUT = async (request: any, { params }: any) => {
  const { id } = params
  const body: QuestionsTypeUpdate = await request.json()

  try {
    const res = await prisma.questions.update({
      where: {
        id,
      },
      data: {
        content: body?.content,
        cateQuestionId: body?.cateQuestionId,
        type: body?.type,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
