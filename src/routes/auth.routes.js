const {Router} = require('express');
const {
  register,
  userLogin
} = require('../controllers/auth.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/register', register);
router.post('/login', userLogin)


module.exports = router;