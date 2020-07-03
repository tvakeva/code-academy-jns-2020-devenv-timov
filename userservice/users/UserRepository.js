const { MongoClient, ObjectId } = require("mongodb");
const mongoDbUrl = "mongodb://root:example@mongo:27017/";

const addUser = (newUser, callback) => {
  MongoClient.connect(mongoDbUrl, (err, dbconn) => {
    if (err) throw err;
    const dbo = dbconn.db("userservice");
    const collection = dbo.collection("users");
    collection.insertOne(newUser, (err, dbRes) => {
      if (err) throw err;
      callback(dbRes.ops[0]);
      dbconn.close();
    });
  });
};
const getUsers = (callback) => {
  MongoClient.connect(mongoDbUrl, (err, dbconn) => {
    if (err) throw err;
    const dbo = dbconn.db("userservice");
    const collection = dbo.collection("users");
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      callback(result);
      dbconn.close();
    });
  });
};
const removeUser = (userId, callback) => {
  MongoClient.connect(mongoDbUrl, (err, dbconn) => {
    if (err) throw err;
    const dbo = dbconn.db("userservice");
    const collection = dbo.collection("users");

    const deleteQuery = { _id: ObjectId(userId) };
    collection.deleteOne(deleteQuery, (err, dbRes) => {
      if (err) throw err;
      callback();
      dbconn.close();
    });
  });
};

module.exports = {
  addUser,
  getUsers,
  removeUser,
};
