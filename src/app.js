const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const routeApi = require('./routes');

const app=express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels();

db.authenticate()
  .then(() => console.log('base de datos autenticada'))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log('base de datos sincronizada'))
  .catch((error) => console.log(error));

app.get('/', (req, res)=>{
  res.json({
    message: "ok"
  })
});

routeApi(app);


module.exports = app;