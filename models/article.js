const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
  constructor() {
    super("article");
  }

  async findAll() {
    const articles = await super.findAll();
    return articles;
  }

  async findOne(slug) {
    const article = await super.findOne("slug", slug);
    return article;
  }

  // !!! Ma ei kasuta findMany meetoodi, aga kui see ei ole kommenteeritud. siis ei leia server autori artikleid

  // async findMany(slug) {
  //   const article = await super.findMany("author_id", slug.id);
  //   return article;
  // }
  async create(article) {
    const createdArticleId = await super.create(article);
    return createdArticleId;
  }
  async update(id, articleData) {
    const affectedRows = await super.update(id, articleData);
    return affectedRows;
  }

  async delete(id) {
    const affectedRows = await super.delete(id);
    return affectedRows;
  }
}

module.exports = ArticleModel;
