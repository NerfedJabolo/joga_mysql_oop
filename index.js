const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const articleRoutes = require("./routes/articles");
const authorRoutes = require("./routes/authors");
app.use("/", articleRoutes);
app.use("/authors", authorRoutes);

app.listen(3000, () => {
  console.log("App is started at http://localhost:3000");
});
