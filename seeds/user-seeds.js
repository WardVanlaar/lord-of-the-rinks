const { User } = require('../models');

const userData = [
  {
    username: 'billie',
    email: 'billie@gmail.com',
    password: 'test1',
  },
  {
    username: 'skyler',
    email: 'skyler@gmail.com',
    password: 'test2',
  },
  {
    username: 'xavier',
    email: 'xavier@gmail.com',
    password: 'test3',
  },
  {
    username: 'aisha',
    email: 'aisha@gmail.com',
    password: 'test4',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;