let myFavorites = [];

const postFav = (req,res) => {
  // const {id,status,name,species,origin,image,gender} = req.body;
  /* let character = {
    id,
    status,
    name,
    species,
    origin,
    image,
    gender
  } */

  let character = {
    ...req.body
  }

  const noRepetido = myFavorites.filter(fav => fav.id === character.id)
  if(!noRepetido.length) myFavorites.push(character)  
  return res.status(200).json(myFavorites);
}

const deleteFav = (req,res) => {
  const {id} = req.params;
  let filterFavorites = myFavorites.filter(fav => fav.id !== +id)
  myFavorites = filterFavorites;
  return res.status(200).json(myFavorites);
}

const getFavs = (req,res) => {
  return res.status(200).json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
  getFavs
}