const axios = require("axios")

/* const getCharById = (res,id) => {
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
      return res
              .writeHead(200, {"Content-type" : "application/json"})
              .end(JSON.stringify(personaje))
    })
    .catch(err => {
      return res
              .writeHead(500, {"Content-type" : "text/plain"})
              .end(err.message)
    })
    
} */

// ' Versión para EXPRESS

const URL =  "https://rickandmortyapi.com/api/character/";

const getCharById = (req,res) => {
  let personaje = {};
  const {id} = req.params;
  axios.get(`${URL}${id}`)
    .then(({data}) => {
      personaje = {
        id : +id,
        status : data.status,
        name : data.name,
        species : data.species,
        origin : data.origin,
        image : data.image,
        gender : data.gender,
      }
      
      return res.status(200).json(personaje)
      
    })
    .catch(err => {
      if( /^[0-9]+$/.test(id) && Object.entries(personaje).length === 0) {
        return res.status(404).send('Not fount')        
      }
      return res.status(500).send(`Error mijo: ${err.message}`)
    })
}

module.exports = {
  getCharById
}