const express = require("express");

const app = express();
app.use(express.json());

const articleRoutes = require("./routes/articles");
app.use("/", articleRoutes);

app.listen(3000, () => {
  console.log("App is started at http://localhost:3000");
});
