const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send(
    `<h1>Home ${req.dataTyme} </h1> <a href="/about">About</a> <a href="/contact">Contact</a>`
  );
});
  router.use((req, res) => {
    res
      .status(400)
      .send(
        `<h1>Pagina no encontrada ${req.dataTyme} </h1> <a href="/">Menú</a>`
      );
  });
  module.exports = router;