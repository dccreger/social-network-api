const connection = require("../config/connection");
const mongoose = require("mongoose");
const User = require("../models/User");
const Thought = require("../models/Thought");
const seedData = require("./data");

// Creates a connection to MongoDB
connection.once("open", async () => {
  try {
    // Check if collections exist before dropping them
    const userCollections = await mongoose.connection.db
      .listCollections({ name: "users" })
      .toArray();
    if (userCollections.length > 0) {
      await User.collection.drop();
    }

    const thoughtCollections = await mongoose.connection.db
      .listCollections({ name: "thoughts" })
      .toArray();
    if (thoughtCollections.length > 0) {
      await Thought.collection.drop();
    }

    // Insert seed data into User collection
    const createdUsers = await User.insertMany(seedData.users);
    console.log("Inserted Users:");
    createdUsers.forEach((user) => {
      console.log(`- Username: ${user.username}, Age: ${user.age}`);
    });

    // Insert seed data into Thought collection
    const createdThoughts = await Thought.insertMany(seedData.thoughts);
    console.log("Inserted Thoughts:");
    createdThoughts.forEach((thought) => {
      console.log(
        `- Thought Text: ${thought.thoughtText}, Username: ${thought.username}`
      );
    });
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    process.exit(0);
  }
});
