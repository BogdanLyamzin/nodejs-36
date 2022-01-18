const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/products")

const app = express();

app.use(cors());

app.use("/products", productsRouter)

app.use((req, res, next)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(4000);