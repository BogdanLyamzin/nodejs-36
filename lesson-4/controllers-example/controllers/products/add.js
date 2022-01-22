const createError = require("http-errors");

const products = require("../../models/products");
const {productSchema} = require("../../schemas");

const add = async(req, res, next)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            throw new createError(400, error.message)
        }
        const {name, price} = req.body;
        const result = await products.add(name, price);
        res.status(201).json(result)
    } catch (error) {
        next(error);
    }
}

module.exports = add;