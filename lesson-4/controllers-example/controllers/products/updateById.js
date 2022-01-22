const createError = require("http-errors");

const products = require("../../models/products");
const {productSchema} = require("../../schemas");

const updateById = async(req, res, next)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            throw new createError(400, error.message)
        }
        const {id} = req.params;
        const {name, price} = req.body;
        const result = await products.updateById(id, name, price);
        if(!result){
            throw new createError(404, "Not found")
        }
        res.json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = updateById;