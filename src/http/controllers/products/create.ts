import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { CreateProductsService } from '@/services/create-products'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const bodySchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
  })

  const { name, price, description } = bodySchema.parse(request.body)

  try {
    const prismaProductsRepository = new PrismaProductsRepository()
    const createProductService = new CreateProductsService(
      prismaProductsRepository,
    )

    const product = await createProductService.execute({
      name,
      price,
      description,
    })

    return response.json(product)
  } catch (error) {}

  return response.status(201).send()
}
