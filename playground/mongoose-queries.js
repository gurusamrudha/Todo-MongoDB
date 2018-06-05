const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

var id = '5b0c6a2ca8e07c1ee844d3fe';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});
