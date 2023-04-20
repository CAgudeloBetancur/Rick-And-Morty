const characters = require('./utils/data');
const {getCharById} = require('./controllers/getCharById');

const http = require('http');

http.createServer((request,response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  // response.writeHead(200,{ "Content-type" : "text/JSON" })
  /* if(request.url.includes('/rickandmorty/character')) {
    return response
      .writeHead(200,{ "Content-type" : "text/JSON" })
      .end(JSON.stringify(character));
      const character = characters.find(x => x.id === +id)
  }   */
  if(request.url.includes('/rickandmorty/character')) {
    const id = request.url.split('/').at(-1);
    getCharById(response,id);
  }
}).listen(3001,'localhost');

// Con el + delante de un número lo parseamos