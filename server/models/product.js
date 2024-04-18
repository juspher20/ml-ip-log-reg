const db = require('..db/');

class Product {
    static async getAllProducts () {
       const sql = 'SELECT *FROM products';
       const [rows] = await db.query(sql);
       return rows;
    }

    static async getProductById(porductId) {
        const sql = 'SELECT *FROM produstc WHERE id = ?';
        const [rows] = await db.query(sql, [productId]);
        return rows [0];
    }
    
    static async createProduct(name, price, description) {
        const sql = 'INSERT INTO product (name, price, description) VALUES (?, ?, ?)';
        await db.query(sql[name, price, description]);
    
    }
}

module.exports = Product;