const express = require("express");
const router = express.Router();

let productos = [];

router
  .route("/")
  // Obtener todos los productos
  .get((req, res) => {
    res.render("productos.hbs", {
      title: "Motores de Plantillas - Productos",
      productos,
    });
  })
  // Crear un producto
  .post((req, res) => {
    let producto = req.body;
    if (
      Object.entries(producto).length === 0 ||
      Object.entries(producto).length < 3
    ) {
      res.status(422).json({
        error: "No se pudo obtener los atributos del producto correctamente.",
      });
    } else {
      const ids = productos.map((item) => item.id);
      if (ids.length === 0) {
        producto.id = 1;
      } else {
        let maxId = Math.max(...ids);
        producto.id = maxId + 1;
      }
      productos.push(producto);
      res.render("home.hbs");
    }
  });

module.exports = router;