var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("dbAlex");
    var myobj = {name: "Comapny Inc", address: "Highwat 37"};
    dbo.collection("customers").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});