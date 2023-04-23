const users = require('./../utils/users');

const login = (req,res) => {

  const {email,password} = req.query;

  const usuario = users.find(user => {
    return user.email === email && user.password === password
  });

  return res.status(200).json({access: usuario ? true : false});

}

module.exports = {
  login
}