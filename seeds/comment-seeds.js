const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Good for you. I wish I had picked touring skates.',
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: 'That actually played in my favor given that I did not know how to stop with hockey skates.',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'I would have the same problem so go easy on yourself.',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'At least it would be easy to stop.',
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: 'But next time I will get regular skates regardless.',
    user_id: 3,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;