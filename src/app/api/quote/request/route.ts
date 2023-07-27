import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { RequestPayload } from './type'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

export const POST = async (request: any) => {
  const body: RequestPayload = await request.json()

  try {
    const res = await prisma.request.create({
      data: {
        name: body.fullName,
        email: body.email,
        phone: body.phone,
        company: body.company,
        position: body.position,
        serviceUWant: body.serviceUWant,
        createdAt: new Date(),
      },
    })

    await prisma.requestAnswers.createMany({
      data: body.RequestAnswers.map(i => ({ ...i, requestId: res?.id })),
    })

    // await sendEmail(body.email, 'hehehe', 'hihihi')
    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    throw new NextResponse(JSON.stringify(err), { status: 500 })
  }
}

// get all project
export const GET = async () => {
  try {
    const res = await prisma.request.findMany({
      include: {
        requestAnswers: true,
      },
    })

    return new NextResponse(JSON.stringify(res), { status: 201 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

const sendEmail = async (toEmail: string, subject: string, message: string) => {
  const senderEmail = 'luongvanvi1007@gmail.com'
  const senderPassword = 'j01676705370'

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: senderEmail,
      to: toEmail,
      subject,
      text: message,
    })
  } catch (error) {
    throw new NextResponse(JSON.stringify(error), { status: 500 })
  }
}
