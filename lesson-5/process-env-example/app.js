const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DB_HOST);
console.log(process.env.SECRET_KEY);