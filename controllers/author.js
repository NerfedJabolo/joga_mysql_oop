const authorDbModel = require("../models/author");
const articleDbModel = require("../models/article");

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
  constructor() {
    const authors = [];
  }

  async getAuthorById(req, res) {
    const author = await authorModel.findById(req.params.slug);
    console.log(author);
    const articles = await articleModel.findMany("author_id", author.id);
    console.log(articles);
    author["articles"] = articles;
    res.status(201).json({ author: author });
  }
}

module.exports = new authorController();
