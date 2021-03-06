const createError = require("http-errors");

const products = require("../../models/products")

const getById = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await products.getById(id);
        if(!result){
            throw new createError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = getById;