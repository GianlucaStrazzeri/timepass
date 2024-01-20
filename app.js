const express = require('express');
const app = express();
const mainRoutes = require('./routes/endRoutes');
const horaMiddleware = require('./middlewares/horaMiddlewares.js');
app.use(horaMiddleware);
app.use('/', mainRoutes); 
app.listen(3000, () => {
  
  console.log('El servidor está escuchando en el puerto 3000');
});