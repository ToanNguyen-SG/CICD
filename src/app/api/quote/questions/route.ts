import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { QuestionsType } from './type'

const prisma = new PrismaClient()

export const POST = async (request: any) => {
  const body: QuestionsType = await request.json()

  try {
    const answer = await prisma.questions.create({
      data: {
        cateQuestionId: body.cateQuestionId,
        content: body?.content,
        type: body?.type,
        createdAt: new Date(),
      },
    })

    await prisma.answers.createMany({
      data: body.answers.map(i => ({
        content: i,
        parentId: answer?.id,
        createdAt: new Date(),
      })),
    })

    return new NextResponse(JSON.stringify(answer), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get all project
export const GET = async () => {
  try {
    const res = await prisma.questions.findMany({
      where: {
        isDeleted: false,
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
