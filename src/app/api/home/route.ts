import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { HomeType } from './type'

const prisma = new PrismaClient()

// add project hihi
export const POST = async (request: any) => {
  const body: HomeType = await request.json()

  body.createdAt = new Date()

  try {
    await prisma.home.create({
      data: body,
    })

    return new NextResponse('Post has been created', { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// get all project
// export const GET = async (request: any) => {
//   const body: ProjectType = await request.json()

//   body.createdAt = new Date()

//   try {s
//     await prisma.project.create({
//       data: body,
//     })

//     return new NextResponse('Post has been created', { status: 201 })
//   } catch (err) {
//     return new NextResponse('Database Error', { status: 500 })
//   }
// }
