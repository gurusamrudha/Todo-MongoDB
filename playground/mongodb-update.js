//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, db)=>{
  if(err)
  {
    return console.log('Unable to connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b083bff334bc148d289e6bc')},
//   {
//     $set: {
//       completed: true
//     }
//   },
//   {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

// db.collection('Users').updateMany({
//   _id: new ObjectID('5b083f5b334bc148d289e7ee')
// },{
//   $set: {
//     name: 'Guru'
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b083f5b334bc148d289e7ee')
},{
  $inc: {
    age: 1
  },
  $set:{
    name: 'Guru Samrudha'
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //db.close();


});
