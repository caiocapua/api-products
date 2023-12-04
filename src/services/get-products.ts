import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface GetProductsRequest {
  id: string
}

interface GetProductsResponse {
  product: Product
}

export class GetProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ id }: GetProductsRequest): Promise<GetProductsResponse> {
    const product = await this.productsRepository.findById(id)

    if (!product) {
      throw new Error(`Product ${id} not found`)
    }

    return {
      product,
    }
  }
}
