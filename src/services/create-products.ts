import { ProductsRepository } from '@/repositories/products-repository'

interface CreateProductsRequest {
  name: string
  price: number
  description: string
}

export class CreateProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ name, price, description }: CreateProductsRequest) {
    // const productsAlreadyExists = await this.productsRepository.findByName(name)

    // if (productsAlreadyExists) {
    //   throw new Error(`Product ${name} already exists`)
    // }

    const products = await this.productsRepository.create({
      name,
      price,
      description,
    })

    return products
  }
}
