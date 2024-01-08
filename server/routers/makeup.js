import { Router } from 'express'
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from '../controllers/makeup.js'
const router = Router()


router.get("/",getProducts)
router.get("/:id",getProductsById)
router.put("/:id",updateProduct)
router.post("/",createProduct)
router.delete("/:id",deleteProduct)


export default router