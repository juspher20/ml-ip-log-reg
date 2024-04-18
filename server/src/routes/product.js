const express = require('express');
const Product = require('../models/product');


const Router = express.Router();

router.get ('./', async (req, res) =>{
    try {
        const products = await Product.getAllProducts();
        res.json(products); 
    } catch (error) {
        console.error('Error fetching prodcuts;', error);
        res.status(500).json({message: 'Internal serever error'});
    }
    
});

module.export = router;