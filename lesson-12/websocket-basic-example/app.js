const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=>{
    clients.push(newClient);
    // console.log("Новое соединение с фронтенда")
    setTimeout(() => {
        newClient.send("Добро пожаловать на наш бекенд")
    }, 3000);

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("У нас новый член команды")
        }
    })    
})