const AuthServices = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({message: 'user created'});
    } else{
      res.status(400).json({message: 'something wrong'});
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
}

const userLogin = async (req, res) => {
  try {
    const { correo , password} = req.body;
    if (!correo) {
      res.status(400).json({
        error: "Missing data",
        message: "not correo  provided"
      });
    }
    if (!password) {
      res.status(400).json({
        error: "Missing data",
        message: "not password provided"
      });
    }
    const result = await AuthServices.login({correo, password});

    if (result.isvalid) {
      const {id, correo} = result.user;
      const userData = {id, correo};
      const token = AuthServices.genToken(userData);
      const userToken = result.user.token=token

      res.json({
        user: 'ok',
        result: result
      });

    }else{
      res.status(400).json({message: 'user not fount'})
    }
    
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: "Something wrong ",
      msj: error.message
    });
  }
}

module.exports ={
  register,
  userLogin
}