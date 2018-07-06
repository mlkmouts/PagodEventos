//Dependencias
const app = require('express')();
const routes = require('./routes');

//conectar todas as rotas na aplicação 
app.use('/', routes);

//inicializar o servidor 
app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000");
});