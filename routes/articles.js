const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article");

router.get("/", (req, res) => articleController.getAllArticles(req, res));
router.get("/article/:slug", (req, res) =>
  articleController.getArticleBySlug(req, res)
);
router.post("/article/create", (req, res) =>
  articleController.createNewArticle(req, res)
);

router.put("/article/update/:id", (req, res) =>
  articleController.updateArticle(req, res)
);

router.delete("/article/delete/:id", (req, res) =>
  articleController.deleteArticle(req, res)
);

module.exports = router;
