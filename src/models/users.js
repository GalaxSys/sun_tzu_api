const db = require('../utils/database');
const {DataTypes} = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

const Users = db.define('usuarios', {
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre_completo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_telefonico:{
    type: DataTypes.STRING,
    allowNull: false
  },
  correo:{
    type: DataTypes.STRING,
    unique: true,
    validate:{
      isEmail: true,
    },
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  token:{
    type: DataTypes.STRING,
  },
  activo:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false
  },
},{
  hooks:{
    beforeCreate: (user, options) =>{
      const {password} = user;
      const hash = bcrypt.hashSync(password, Number(process.env.HASH_COUNT));
      user.password = hash;
    }
  }
});

module.exports = Users;