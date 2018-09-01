var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/FSWDassignment21A';

MongoClient.connect(url, function(err, db) {
    if(err) {
        console.log("Connection failed:", err);
        return;
    }
    console.log("Successfully connected to server");

    var dbase = db.db("FSWDassignment21A");

    dbase.createCollection("employees", function(err, res) {
        if(err) {
            console.log("Couldnt create collection:", err);
            return;
        }
        console.log("Collection Created!");
    })
    dbase.insertMany([
        {
            "Ename": "John Smith", "department": "clerical staff", "designation": "secretary",
            "salary": 3500, "dateOfJoining": "9/1/1990", "city": "Delhi"
        },
        {
            "Ename": "Ashley Xang", "department": "support staff"
        }
    ])
})