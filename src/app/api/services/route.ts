import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { ServiceBodyType } from './type'

const prisma = new PrismaClient()

// add new skill
export const POST = async (request: any) => {
  const body: ServiceBodyType = await request.json()

  body.service.createdAt = new Date()

  try {
    const res = await prisma.service.create({
      data: body.service,
    })

    body.childs.forEach(item => {
      item.parentId = res.id
    })

    const childs = await prisma.service.createMany({
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
    const res = await prisma.service.findMany()

    return new NextResponse(JSON.stringify(res || []), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
