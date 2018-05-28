const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, db)=>{
  if(err)
  {
    return console.log('Unable to connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Somthing in DB',
  //   completed: false
  // },(err, result) => {
  //   if(err)
  //   {
  //     return console.log('Unable to insert Todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Guru samrudha',
  //   age: 25,
  //   Location: 'India'
  // },(err, result) => {
  //   if(err)
  //   {
  //     return console.log('Unable to insert Users',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.close();


});
