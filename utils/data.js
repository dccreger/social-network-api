const seedData = {
  users: [
    {
      username: "john_doe",
      email: "john@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "jane_smith",
      email: "jane@example.com",
      thoughts: [],
      friends: [],
    },
  ],
  thoughts: [
    {
      thoughtText: "This is a great thought!",
      createdAt: new Date(),
      username: "john_doe",
      reactions: [],
    },
    {
      thoughtText: "Coding is so much fun!",
      createdAt: new Date(),
      username: "jane_smith",
      reactions: [],
    },
  ],
  reactions: [
    {
      reactionBody: "I agree!",
      username: "john_doe",
      createdAt: new Date(),
    },
    {
      reactionBody: "Interesting!",
      username: "jane_smith",
      createdAt: new Date(),
    },
  ],
};

module.exports = seedData;
