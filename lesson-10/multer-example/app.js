const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {v4} = require("uuid");

const app = express();

app.use(cors());
app.use(express.static("public"))

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 100
    }
});

const upload = multer({
    storage: multerConfig
})

// const upload = multer({dest: "temp/"})

const products = [];

const productsDir = path.join(__dirname, "public", "products");

app.post("/api/products", upload.single("image"), async(req, res, next)=> {
    // console.log(req.body)
    const {path: tempUpload, filename} = req.file;
    try {
        const resultUpload = path.join(productsDir, filename);
        await fs.rename(tempUpload, resultUpload);
        const image = path.join("products", filename);
        const newProduct = {...req.body, id: v4(), image};
        products.push(newProduct);
        res.status(201).json(newProduct);
// await fs.rename("C:\\GoIT\\nodejs-36\\lesson-9\\multer-example\\temp\\2085-1.png",
    // "C:\\GoIT\\nodejs-36\\lesson-9\\multer-example\\public\\products\\2085-1.png")
    } catch (error) {
        await fs.unlink(tempUpload);
    }
});

app.get("/api/products", async(req, res, next)=> {
    res.json(products);
})


app.listen(3000)