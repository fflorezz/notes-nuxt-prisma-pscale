import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  return await prisma.note.delete({
    where: { id: Number(event.context.params.id) },
  })
})
