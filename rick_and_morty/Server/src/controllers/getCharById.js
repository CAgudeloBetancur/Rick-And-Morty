const axios = require("axios")

const getCharById = (res,id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      let personaje = {
        id : id,
        name : data.name,
        gender : data.gender,
        species : data.species,
        origin : data.origin,
        image : data.image,
        status : data.status
      }
      res.writeHead(200, {"Content-type" : "application/json"})
      return res.end(JSON.stringify(personaje))
    })
    .catch(err => {
      res.writeHead(500, {"Content-type" : "text/plain"})
      return res.end(err.message)
    })
    
}

module.exports = {
  getCharById
}