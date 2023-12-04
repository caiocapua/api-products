import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductCreateInput) {
    await prismaClient.product.create({
      data,
    })
  }

  findByName(name: string): Promise<{
    id: string
    name: string
    price: number
    description: string | null
  } | null> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<{
    id: string
    name: string
    price: number
    description: string | null
  } | null> {
    throw new Error('Method not implemented.')
  }

  async fecthProducts() {
    const products = await prismaClient.product.findMany()

    return products
  }
}
