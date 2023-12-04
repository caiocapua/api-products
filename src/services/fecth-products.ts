import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface FetchProductsResponse {
  products: Product[]
}

export class FetchProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<FetchProductsResponse> {
    const products = await this.productsRepository.fecthProducts()

    return {
      products,
    }
  }
}
