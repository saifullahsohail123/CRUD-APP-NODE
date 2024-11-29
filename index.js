const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const Product = require('./models/product.model.js')
const ProductRoute =require('./routes/product.route.js')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', ProductRoute)



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