const { parseAstAsync } = require('vite');
const Product = require('../models/product.model');




const getProducts = async (req, res) =>{
  try {
    const product = await Product.find({});
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({message: error.messsage});

  }
};

const getProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const updateProduct = async (req, res) =>{
  try {
    const {id} = req.params;

    const product = await product.findByIdAndUpdate(id, req.body);

    if(!product) {
      return res.status(404).json({message: "Product not found"});
    }
    const updatedProduct = await  Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({message: error.message});
    
  }
};

const deleteProduct = async (req, res) =>{
  try {
    const {id} = req.params;
    
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    
    res.status(200).json({message: "Product deleted succcesfully"});

  } catch (error) {
    res.status(500).json({message: error.message});
    
  }
};






module.exports = {
 getProducts,
 getProduct,
 createProduct,
 updateProduct,
 deleteProduct,
};



























// const Product = require('../models/product.model'); 

// async function createProduct(req, res) {
//   try {
//     const { name, description, price, quantity } = req.body;

//     const newProduct = await Product.create({
//       name,
//       description,
//       price,
//       quantity
//     });

//     res.status(201).json({ success: true, product: newProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// }

// async function getAllProducts(req, res) {
//   try {
//     const products = await Product.findAll();

//     res.status(200).json({ success: true, products });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// }

// module.exports = {
//   createProduct,
//   getAllProducts
// };


