const products = require("../../models/products");

const removeById = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await products.removeById(id);
        if(!result){
            throw new createError(404, "Not found")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = removeById;