var MongoClient = require('mongo').MongoClient
var url='mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err) throw  err;
    var dbmy = db.db('mydbFirst');
    var  mydata={name:'Harishma',city:'Coimbatore'};

    dbmy.collection('webUsers').insertOne(mydata,function(err,res){
        if(err)  throw err;
        console.log('Document inserted')
        db.close();
    });
});