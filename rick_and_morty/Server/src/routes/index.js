// ' Importaciones

// Express
const express = require('express');

// Controllers
const {getCharById} = require('./../controllers/getCharById')
const {postFav,deleteFav,getFavs} = require('./../controllers/handleFavorites')
const {login} = require('./../controllers/login');

// Router
const router = express.Router();

// ' Rutas

router.get('/character/:id',(req,res) => {
  getCharById(req,res);
})

router.get('/login',(req,res) => {
  login(req,res);
})

router.post('/fav',(req,res) => {
  postFav(req,res);
})

router.delete('/fav/:id',(req,res) => {
  deleteFav(req,res);
})

router.get('/fav',(req,res) => {
  getFavs(req,res);
})

module.exports = router;