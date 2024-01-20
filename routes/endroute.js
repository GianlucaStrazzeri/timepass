const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>  bienvenido </h1>
<h2> La hora actual es</h2>  ${req.dataTyme}
<a href="/endroute"><button>Entrar</button></a> 
</body>
   </html>`
  );
});
router.get('/endroute', (req, res) => {
    res.send(`<h1>Endroute ${req.dataTyme} </h1> <a href="/">Menú</a>`);
  });
  router.use((req, res) => {
    res
      .status(400)
      .send(
        `<h1>Pagina no encontrada ${req.dataTyme} </h1> <a href="/">Menú</a>`
      );
  });
  module.exports = router;