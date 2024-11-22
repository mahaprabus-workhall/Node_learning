//_id: 6721dbc34e34c55783632e38


//12 bytes
  //4 bytes : timestamp
  //3 bytes : machine Identifier
  //2 bytes : process identifier
  //3 bytes : counter


 // 1 byte = 8bits
 // 2^ 8 = 256
 // 2 ^ 24 = 16M


 //id is genereated by drivers
 // Driver -> MongoDB


 const mongo=require('mongoose')

 const id=new mongo.Types.ObjectId('5a736f30a2e97a9bd9c29ffe')

 console.log(id.getTimestamp())