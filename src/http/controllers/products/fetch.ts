import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { FetchProductsService } from '@/services/fecth-products'
import { Request, Response } from 'express'

export async function fetch(request: Request, response: Response) {
  try {
    const prismaProductsRepository = new PrismaProductsRepository()
    const fetchProductService = new FetchProductsService(
      prismaProductsRepository,
    )

    const products = await fetchProductService.execute()

    return response.json({
      products,
    })
  } catch (error) {
    console.error(error)
  }
}
