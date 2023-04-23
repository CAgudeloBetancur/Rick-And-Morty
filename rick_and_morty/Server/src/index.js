// ' Importaciones para express

// Express
const express = require('express');

// Router
const router = require('./routes/index');

// ' Importaciones para http

/* const {getCharById} = require('./controllers/getCharById');
const http = require('http'); */

// ! Versión del servidor con http

// http.createServer((request,response) => {
  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.writeHead(200,{ "Content-type" : "text/JSON" })

  // ? validación nuestra
  /* if(request.url.includes('/rickandmorty/character')) {
    const character = characters.find(x => x.id === +id)
    const id = request.url.split('/').at(-1);
    return response
      .writeHead(200,{ "Content-type" : "text/JSON" })
      .end(JSON.stringify(character));
  }   */

  // ? Valiodación Dai
  /* if(request.url.includes('/rickandmorty/character')) {
    const id = request.url.split('/').at(-1);
    getCharById(response,id);
  } */

// }).listen(3001,'localhost');

// Con el + delante de un número lo parseamos

// ! Servidor con express

// ? Configuración de servidor


const server = express();

// MiddleWare
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

const PORT = 3001;

// ? MiddleWares

// Middleware para json por body
server.use(express.json())

// Middleware para rutas
server.use('/rickandmorty',router);


// ? Indicamos el listen

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
})

