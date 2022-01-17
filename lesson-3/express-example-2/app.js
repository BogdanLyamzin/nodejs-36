const express = require("express");

const products = require("./products")

const app = express();

app.set("json spaces", 8);

app.get("/products", (req, res)=> {
    // res.json(null)
    // res.send(null)
    res.json(products);
    // res.send(products);
});

app.post("/products", (req, res)=> {
    console.log("Add new product");
    res.json({
        message: "Add success"
    })
})

app.listen(4000);