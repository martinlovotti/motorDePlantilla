const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", require("./src/routes/productos"));

// View engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: __dirname + "/src/views/layouts",
    partialsDir: __dirname + "/src/views/partials",
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

// Routes
app.get("/", (req, res) => {
  res.render("home.hbs", { title: "Motores de Plantillas" });
});

// Server
app.listen(PORT, () => {
  console.log("Server running on port...", PORT);
});