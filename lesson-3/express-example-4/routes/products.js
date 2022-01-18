const express = require("express");

const products = require("../products");

const router = express.Router();

// GET /products
router.get("/", (req, res)=> {
    res.json(products)
})
// GET /products/favorite
router.get("/favorite", (req, res)=> {
    res.json(products)
})

// POST /products
router.post("/", (req, res)=> {
    res.json({
        message: "Add success"
    })
})

module.exports = router;