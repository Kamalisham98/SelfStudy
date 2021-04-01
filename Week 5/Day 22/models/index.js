const { MongoClient } = require("mongodb"); // Import MonhoClient

const uri = process.env.MONGO_URI; // Address of Cluster or server

const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //Make new connections

// Run the connection
try {
  connection.connect();
  console.log("mongoDB Connected");
} catch (error) {
// If connection error
  console.error(error);
}
// Export connection
module.exports = connection;
