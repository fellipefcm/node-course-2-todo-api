const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

db.collection('users').find().toArray().then((docs) => {
  // console.log('User count: ' + count);
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch todos', err);
});

// db.collection('todos').find().toArray().then((docs) => {
//   // console.log('User count: ' + count);
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

// db.collection('Users').find({name: 'Fellipe Fernandes Cardoso Marcellino'}).toArray().then((docs) => {
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch users', err);
// });


client.close();
});
