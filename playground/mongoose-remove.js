const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');
const { ObjectId } =require('mongodb');

// Todo.remove({}).then((results) => {
//   console.log(results);
// });

Todo.findByIdAndRemove('5b16f1de6978e443867dd817').then((todo) => {
  console.log(todo);
});
