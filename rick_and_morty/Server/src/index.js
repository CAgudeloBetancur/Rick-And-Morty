const characters = require('./utils/data');

const http = require('http');

http.createServer((request,response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.writeHead(200,{ "Content-type" : "text/JSON" })
  if(request.url.includes('/rickandmorty/character')) {
    const idIndex = request.url.lastIndexOf('/')
    const id = request.url.slice(idIndex + 1);
    const character = characters.filter(x => x.id === parseInt(id))
    response.end(JSON.stringify(character[0]));
  }  
}).listen(3001,'localhost');