const {User} = require('./../DB_connection');

const postUser = async (req,res) => {

  const {email,password} = req.body;

  if(!email || !password) return res.status(400).send('Faltan Datos');

  try {
    const [userCreated,created] = await User.findOrCreate({
      where: {email},
      defaults: {
        email,
        password
      }
    })
    return created 
      ? res.status(200).json(userCreated)
      : res.status(400).send('Ese usuario ya existe')
  } catch (error) {
    return res.status(500).send(error.message);
  }

}

module.exports = {
  postUser
};