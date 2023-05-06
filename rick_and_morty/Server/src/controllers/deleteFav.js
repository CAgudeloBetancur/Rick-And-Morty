const {Favorite} = require('../DB_connection');

const deleteFav = async (req,res) => {
  const {id} = req.params
  try {
    // const fav = await Favorite.findOne({where: {id}});
    // await fav.removeUser(id);
    await Favorite.destroy({
      where: {
        id: +id
      }
    })

    const favs = await Favorite.findAll();

    return res.status(200).json(favs);

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  deleteFav,
}