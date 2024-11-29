const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')


app.use(express.json())

app.get('/',function(req,res) {
    res.send('Hello World! Response from port 3000')    
})

app.post('/api/products',async function(req,res) {
try
{
    const product = await Product.create(req.body)
    res.status(200).json(product)
}
catch(err)
{
    res.status(500).json({message: err.message})
}

})


app.get('/api/products',async function(req,res) {
    try
    {
        const product = await Product.find()
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
    
    })


mongoose.connect('mongodb+srv://admin:admin@cluster0.lstf4.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>
{
    console.log('Connected to MongoDB')
    app.listen(3000, function()
    {
        console.log('Server is running on port 3000')
    })
})
.catch(()=>  console.log('Connection failed')   )   