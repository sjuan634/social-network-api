const Chance = require('chance');
const chance = new Chance();
const db = require('../config/connection');
const { User, Thought } = require('../models');

db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  // create 5 users
  const userData = [];
  for (let i = 0; i < 5; i++) {
    userData.push({
      username: chance.twitter(),
      email: chance.email(),
    });
  }
  const createdUsers = await User.insertMany(userData);

  // create 10 thoughts per user with 2 reactions each
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < createdUsers.length; j++) {
      const reaction1 = {
        reactionBody: chance.sentence({ words: chance.integer({ min: 1, max: 10 }) }),
        username: createdUsers[chance.integer({ min: 0, max: createdUsers.length - 1 })].username,
      };
      const reaction2 = {
        reactionBody: chance.sentence({ words: chance.integer({ min: 1, max: 10 }) }),
        username: createdUsers[chance.integer({ min: 0, max: createdUsers.length - 1 })].username,
      };

      const thought = await Thought.create({
        thoughtText: chance.sentence({ words: chance.integer({ min: 1, max: 10 }) }),
        username: createdUsers[j].username,
        reactions: [reaction1, reaction2],
      });

      await User.findOneAndUpdate(
        { _id: createdUsers[j]._id },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
    }
  }

  console.log('Seed data successfully added!');
  process.exit(0);
});
