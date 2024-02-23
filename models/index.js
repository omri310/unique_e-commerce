// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey:'category_id',
  
  onDelete:'CASCADE'
});

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey:'category_id',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey:'product_id',
  through:ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey:'product_id',
  through:ProductTag
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
