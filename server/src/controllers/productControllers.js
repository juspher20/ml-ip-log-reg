const Product = require('../models/product'); 


exports.createProduct = async (req, res) => {
  try {
   
    const { name, description, price, quantity } = req.body;

  
    const newProduct = await Product.create({
      name,
      description,
      price,
      quantity
    });

  
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
  
    const products = await Product.findAll();

   
    res.status(200).json({ success: true, products });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


