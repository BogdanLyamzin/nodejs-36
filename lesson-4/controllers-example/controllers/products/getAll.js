const products = require("../../models/products")

const getAll = async(req, res, next)=> {
    try {
        const result = await products.getAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = getAll;