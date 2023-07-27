import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const body = await readBody(event)

  return await prisma.note.update({
    where: { id: Number(event.context.params.id) },
    data: body,
  })
})
