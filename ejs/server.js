const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", require("./src/routes/productos"));

// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Routes
app.get("/", (req, res) => {
  res.render("./pages/home.ejs");
});

// Server
app.listen(PORT, () => {
  console.log("Server running on port...", PORT);
});