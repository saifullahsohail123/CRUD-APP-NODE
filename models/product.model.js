const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please enter product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price:
        {
            type: Number,
            required: true,
            min: 0,
            default:0,
        },
        image:
        {
            type: String,
            default: "https://via.placeholder.com/150",
            required: false
        }
    },
    {
        timestamps: true, // automatically generates field created at and updated at
    }
)

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product