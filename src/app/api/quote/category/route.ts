import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { CategoryQuestionsType } from './type'

const prisma = new PrismaClient()

export const POST = async (request: any) => {
  const body: CategoryQuestionsType = await request.json()

  try {
    const res = await prisma.categoryQuestions.create({
      data: {
        content: body?.content,
        createdAt: new Date(),
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get all project
export const GET = async () => {
  try {
    const res = await prisma.categoryQuestions.findMany({
      where: { isDeleted: false },
      include: {
        Questions: true,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
