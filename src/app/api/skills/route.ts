import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { SkillBodyType } from './type'

const prisma = new PrismaClient()

// add new skill
export const POST = async (request: any) => {
  const body: SkillBodyType = await request.json()

  body.skill.createdAt = new Date()

  try {
    const res = await prisma.skills.create({
      data: body.skill,
    })

    body.childs.forEach(item => {
      item.parentId = res.id
    })

    const childs = await prisma.skills.createMany({
      data: body.childs,
    })

    return new NextResponse(JSON.stringify({ ...res, childs }), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get all project
export const GET = async () => {
  try {
    const res = await prisma.project.findMany()

    return new NextResponse(JSON.stringify(res || []), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
