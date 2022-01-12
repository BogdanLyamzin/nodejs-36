const productsOperations = require("./products");

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

const invokeAction = async({action, id, name, price}) => {
    switch (action) {
        case "getAll":
            const products = await productsOperations.getAll();
            console.log(products);
            break;
        case "getById":
            const product = await productsOperations.getById(id);
            console.log(product);
            break;
        case "add":
            const newProduct = await productsOperations.add(name, price);
            console.log(newProduct);
            break;
        case "updateById":
            const updateProduct = await productsOperations.updateById(id, name, price);
            console.log(updateProduct);
            break;
        case "removeById":
            const removeProduct = await productsOperations.removeById(id);
            console.log(removeProduct);
            break;
        default:
            console.log("Unknown command")
            break;
    }
}

// invokeAction({action: "getAll"});
// invokeAction({action: "getById", id: "48bd1cd8-72ca-42cc-8457-156bb8c30873"});
// invokeAction({action: "add", name: "iPhone 13", price: 33000});
// invokeAction({
//     action: "updateById", 
//     id: "281b7de8-88e1-44a4-aac6-40f650b99551", 
//     name: "iPhone 13", 
//     price: 32000});

invokeAction({action: "removeById", id: "bbb176ee-20e1-4658-9668-001bbd46645b"})