const { Post } = require('../models');

const postData = [
  {
    title: 'Awesome skates',
    post_text: 'I rented race skates at the Rideau Canal in Ottawa and they were amazing!',
    skates_type: "Race skates",
    user_id: 1,
  },
  {
    title: 'Rideau Canal',
    post_text: "When they say the Rideau Canal is long they really mean LONG! It's a good thing I had touring skates.",
    skates_type: "Touring skates",
    user_id: 2,
  },
  {
    title: 'Hockey Skates',
    post_text: 'I rented skates and they gave me hockey skates...I did not know how to stop',
    skates_type: "Hockey skates",
    user_id: 3,
  },
  {
    title: 'Figure skates',
    post_text: 'I rented skates and they gave me figure skates...I did not know how to make a pirouette',
    skates_type: "Figure skates",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;