import { Prisma, Product } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { randomUUID } from 'crypto'

export class InMemoryProductsRepository implements ProductsRepository {
  private products: Product[] = []

  async create(data: Prisma.ProductCreateInput) {
    const product = {
      id: randomUUID(),
      name: data.name,
      price: data.price,
      description: data.description ? data.description : null,
    }

    this.products.push(product)
  }

  async findByName(name: string) {
    const product = this.products.find((product) => product.name === name)

    if (!product) {
      return null
    }

    return product
  }

  async findById(id: string) {
    const product = this.products.find((product) => product.id === id)

    if (!product) {
      return null
    }

    return product
  }

  async fecthProducts() {
    return this.products
  }
}
