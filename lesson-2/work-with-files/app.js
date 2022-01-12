const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async(filePath, action, data)=> {
    switch(action){
        case "read": 
            const result = await fs.readFile(filePath, "utf-8");
            console.log(result);
            // const text = result.toString(); // UTF-8
            // console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
        case "remove":
            await fs.unlink(filePath);
            break;
        default: 
            console.log("Unknown command");
    }
}

// fileOperation("files/file.txt", "read");
// fileOperation("files/file.txt", "add", "\nНе плюйся - никто не носит золота во рту");
// fileOperation("files/file.txt", "replace", "Новая книга Ницше");
// fileOperation("files/file2.txt", "add", "\nНе плюйся - никто не носит золота во рту");
// fileOperation("files/file3.txt", "replace", "Новая книга Ницше");
fileOperation("files/file3.txt", "remove");

// fs.readFile("files/file2.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

