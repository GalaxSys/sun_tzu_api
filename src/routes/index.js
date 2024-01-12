const authRoutes = require('./auth.routes');
const routeApi = (app) => {


  app.use('/api/v1/auth', authRoutes);
}

module.exports = routeApi;