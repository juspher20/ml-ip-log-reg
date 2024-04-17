const Product = require('../models/product'); // Import the Product model

// Controller function to create a new product
exports.createProduct = async (req, res) => {
  try {
    // Extract product data from request body
    const { name, description, price, quantity } = req.body;

    // Create a new product instance
    const newProduct = await Product.create({
      name,
      description,
      price,
      quantity
    });

    // Send a success response with the newly created product
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.findAll();

    // Send a success response with the retrieved products
    res.status(200).json({ success: true, products });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Other controller functions for updating, deleting, or getting individual products can be defined similarly
