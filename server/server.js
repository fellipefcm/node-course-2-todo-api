var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {
  app
};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// var newTodo = new Todo({
//   text: 'Do laundry',
//   completed: false,
//   completedAt: 2018
// });

//
// var user = new User({
//   email: 'myemail@example.com  '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc)
// }, (e) => {
//   console.log('Unable to save user', e)
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
