const {mongoose} = require('./../server/db/mongoose');
const {user} = require('./../server/models/user');

var id = '5b09ab232de771ea9ca376bf';

user.findById(id).then((doc)=>{
  if(!doc){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(doc, undefined, 2));
}).catch((e) => {
  console.log(e);
})
