const Product = require('../models/product.model.js')


const getProducts = async function(req,res) {
    try
    {
        const product = await Product.find()
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
    
    }


    const getProduct = async function(req,res)
    {
        try
        {
            const {id} =req.params;
            const product = await Product.findById(id)
            res.status(200).json(product)
        
        }
        catch (error)
        {
            res.status(500).json({message: error.message})
        }
    }

    const createProduct = async function(req,res)
    {
        try
        {
            const product = new Product(req.body)
            await product.save()
            res.status(201).json(product)
        }
        catch (error)
        {
            res.status(400).json({message: error.message})
        }
    }

    const deleteProduct = async function(req,res)
    {
        try
        {
            const {id} = req.params;
            const product = await Product.findByIdAndDelete(id);
            if(!product)
                return res.status(404).json({message: 'Product not found'})
            res.status(200).json({message: `Product deleted with id ${id}`})
            // res.status(200).json({message:'Product deleted successfully'});
    
        }
    
        catch(error)
        {
            res.status(500).json({message: error.message})
        }
    }

    const updateProduct = async function(req,res)
    {
        try
        {
            const {id} = req.params
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})
            res.status(200).json(updatedProduct)
        }
        catch (error)
        {
            res.status(400).json({message: error.message})
        }
    }

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}