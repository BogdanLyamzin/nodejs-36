const bcrypt = require("bcryptjs");

const password = "123456";

const genPassword = async (password)=> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword =  await bcrypt.hash(password, salt);
    // console.log("hashPassword", hashPassword)
    const result = await bcrypt.compare("123456", hashPassword);
    console.log(result);
    const result2 = await bcrypt.compare("123457", hashPassword);
    console.log(result2);   
}


genPassword(password);