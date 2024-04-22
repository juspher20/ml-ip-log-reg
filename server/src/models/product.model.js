const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            reuired: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        Image: {
            type: Number,
            required: false
        },
    },

    {
        timestamp : true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
