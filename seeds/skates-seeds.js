const { Skates } = require('../models');

const skatesData = [
  {
    skates_type: 'figure skates',
  },
  {
    skates_type: 'hockey skates',
  },
  {
    skates_type: 'racing skates',
  },
  {
    skates_type: 'touring skates',
  }
];

const seedSkates = () => Skates.bulkCreate(skatesData);

module.exports = seedSkates;