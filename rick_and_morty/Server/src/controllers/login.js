const {User} = require('./../DB_connection');

const login = async (req,res) => {
  const {email,password} = req.query;
  if(!email || !password) {
    return res.status(400).send('Faltan Datos');
  }

  try {
    
    const userFound = await User.findOne({
      where: {
        email
      }
    })

    if(!userFound) {
      return res.status(404).send('Usuario no encontrado');
    } else if(userFound.password === password) {
      return res.status(200).json({access: true});
    } else {
      return res.status(403).send('Contraseña Incorrecta');
    }
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  login
}