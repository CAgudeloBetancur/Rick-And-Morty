const {Favorite} = require('../DB_connection');

const postFav = async (req,res) => {
  const {name,image,status,species,gender,origin} = req.body;
  if(!name || !image || !status || !species || !gender || !origin) {
    return res.status(401).send('Faltan datos');
  }
  try {
    const [fav,created] = await Favorite.findOrCreate({
      where: {
        name
      },
      defaults: {
        name,
        image,
        status,
        species,
        gender,
        origin
      }
    })    

    const favs = await Favorite.findAll();

    return created 
      ? res.status(200).json(favs)
      : res.status(400).send('No se pudo crear al personaje');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  postFav
}