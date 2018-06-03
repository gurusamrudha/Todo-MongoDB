var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://samrudh:guru123@ds111410.mlab.com:11410/mongodbtest' || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};
