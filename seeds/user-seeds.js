const { User } = require('../models');

const userData = [
  {
    username: 'billie',
    email: 'billie@gmail.com',
    password: 'test1',
    skates_id: 3,
  },
  {
    username: 'skyler',
    email: 'skyler@gmail.com',
    password: 'test2',
    skates_id: 4,
  },
  {
    username: 'xavier',
    email: 'xavier@gmail.com',
    password: 'test3',
    skates_id: 2
  },
  {
    username: 'aisha',
    email: 'aisha@gmail.com',
    password: 'test4',
    skates_id: 1,
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;