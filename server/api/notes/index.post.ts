import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const note = await prisma.note.create({
    data: {
      title: body.title,
      content: body.content,
    },
  })

  return note
})
