const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'nodedb';
 
// Use connect method to connect to the server
MongoClient.connect(url + '/' + dbName, function(err, client) {
  // If connection failed then throw error
  if (err) throw err;

  // If connection succeeded then output log
  console.log("Connected successfully to server.");

  var db = client.db(dbName);

  // Create a collection in nodedb
  db.createCollection('account', function(err, res) {
    if (err) throw err;

    console.log("Created the collection successfully.");  
  });

  client.close();
});