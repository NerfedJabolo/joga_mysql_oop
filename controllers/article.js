const articleDbModel = require("../models/article");
const articleModel = new articleDbModel();

class articleController {
  constructor() {
    const articles = [];
  }

  async getAllArticles(req, res) {
    this.articles = await articleModel.findAll();
    res.status(201).json({ articles: this.articles });
  }

  async getArticleBySlug(req, res) {
    const article = await articleModel.findOne(req.params.slug);
    res.status(201).json({ article: article });
  }
  async createNewArticle(req, res) {
    console.log(req);
    const newArticle = {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
      author_id: req.body.author_id,
    };
    const articleId = await articleModel.create(newArticle);
    res.status(201).json({
      message: `created article with id ${articleId}`,
      article: { id: articleId, ...newArticle },
    });
  }
  async updateArticle(req, res) {
    try {
      const { id } = req.params; // Extract article ID from URL params
      const updatedData = req.body; // Get updated data from the request body

      console.log("Updating article with ID:", id);
      console.log("New Data:", updatedData);

      // Call the model's `update` method
      const affectedRows = await articleModel.update(id, updatedData);

      if (affectedRows === 0) {
        return res.status(404).json({ message: "Article not found" });
      }

      res.status(200).json({ message: `Updated article with ID ${id}` });
    } catch (error) {
      console.error("Error updating article:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
  async deleteArticle(req, res) {
    try {
      const { id } = req.params; // Extract article ID from URL params

      console.log("Deleting article with ID:", id);

      // Call the model's `delete` method
      const affectedRows = await articleModel.delete(id);

      if (affectedRows === 0) {
        return res.status(404).json({ message: "Article not found" });
      }

      res.status(200).json({ message: `Deleted article with ID ${id}` });
    } catch (error) {
      console.error("Error deleting article:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new articleController();
