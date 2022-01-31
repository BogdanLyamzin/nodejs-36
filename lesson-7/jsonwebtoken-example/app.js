const jwt = require("jsonwebtoken");

const SECRET_KEY = "ghsdgfhdfg";

const payload = {
    id: "61f831eb1ead6e9ef347e420"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    // const result = jwt.verify(token, SECRET_KEY);
    // console.log(result);
    const result = jwt.verify(`${token}2`, SECRET_KEY);
    console.log(result);
} catch (error) {
    console.log(error.message)
}