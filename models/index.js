const Vote = require('./Vote');
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
<<<<<<< HEAD
// const Skates = require('./Skates');
=======
>>>>>>> origin

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Post.hasMany(Vote, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

<<<<<<< HEAD
// Skates.hasMany(Post, {
//   foreignKey: 'skates_id',
//   onDelete: 'CASCADE'
// });

// Post.belongsTo(Skates, {
//   foreignKey: 'skates_id',
//   onDelete: 'CASCADE'
// })

=======
>>>>>>> origin
module.exports = { User, Post, Vote, Comment };
