import { Router } from 'express'
import { fetch } from '../controllers/products/fetch'
import { create } from '../controllers/products/create'

export const router = Router()

router.get('/products', fetch)
router.post('/products', create)
