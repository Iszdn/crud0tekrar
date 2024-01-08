import Product from "../models/makeup.js";


// create 
export const createProduct=async (req,res)=>{
    try {
        const product=new Product({
            title:req.body.title, 
            marka:req.body.marka,
            price:req.body.price
        })
      await product.save()
      res.json("product created")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// get product 

export const getProducts=async (req,res)=>{
    try {
        const product=await Product.find({})
        res.send(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// getById 
export const getProductsById=async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
// delete 
export const deleteProduct=async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findByIdAndDelete(id)
        res.json("product deleted")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// update
export const updateProduct=async (req,res)=>{
    try {
        const {id}=req.params
        const updatedProduct=await Product.findByIdAndUpdate(id,req.body)
        res.status(200).json("product updated")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

