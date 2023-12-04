import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<void>
  findByName(name: string): Promise<Product | null>
  findById(id: string): Promise<Product | null>
  fecthProducts(): Promise<Product[]>
}
