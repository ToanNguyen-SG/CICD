import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// get all project
export const GET = async (_: any, { params }: any) => {
  const { cateId } = params

  try {
    const res = await prisma.questions.findFirst({
      where: {
        cateQuestionId: cateId,
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
