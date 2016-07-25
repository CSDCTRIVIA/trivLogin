var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');


qProvider = function(host, port) {
    this.db= new Db('QuestionsDB', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
    this.db.open(function(){});
    console.log("MongoDB Connect:" +host + ":" +port);
};

fileProvider = function(host, port) {
    this.db= new Db('QuestionsDB', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
    this.db.open(function(){});
    console.log("MongoDB Connect:" +host + ":" +port);
};



var fileattach = new mongoose.Schema({
    QFileType:String,
    QFileName:String
});

var schema;
schema = new mongoose.Schema({
    QDesc: String,
    QCat: String,
    QPostBy: String,
    QDateTime: {type: Date, default: Date.now},
    QWeightage: Number,
    QAnswer1: String,
    QAnswer2: String,
    QAnswer3: String,
    QAnswer4: String,
    QFileDet: String
});


function insertQDB(e)
{
   alert("DB insert");
}
//Get the collection Question
qProvider.prototype.getCollection= function(callback) {
    this.db.collection('QuestDB', function(error, DBquestions) {
        if( error ) callback(error);
        else callback(null, DBquestions);
    });
};

fileProvider.prototype.getCollection= function(callback) {
    this.db.collection('FilesDB', function(error, DBquestions) {
        if( error ) callback(error);
        else callback(null, DBquestions);
    });
};

//find all Questions
qProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, DBquestions) {
        if( error ) callback(error)
        else {
            DBquestions.find().toArray(function(error, results) {
                if( error ) callback(error)
                else callback(null, results)
            });
        }
    });
};

//Save Question
qProvider.prototype.Save = function(questions,callback){
    this.getCollection(function(error,DBquestions){
        if(error) {
            console.log(error);
        }
        else {
            if( typeof(questions.length)=="undefined")
                questionx = [questions];

            for( var i =0;i< questionx.length;i++ ) {
                question = questionx[i];console.log("rt" +questionx[i]);
                question.created_at = new Date();
            }
            DBquestions.insert(questions,function(){
                console.log("Inserted Success");
            });
        }
    })
};

fileProvider.prototype.Save = function(questions,callback){
    this.getCollection(function(error,DBquestions){
        if(error) {
            console.log(error);
        }
        else {
            if( typeof(questions.length)=="undefined")
                questionx = [questions];

            for( var i =0;i< questionx.length;i++ ) {
                question = questionx[i];console.log("rt" +questionx[i]);
                question.created_at = new Date();
            }
            DBquestions.insert(questions,function(){
                console.log("Inserted Success");
            });
        }
    })
};

























module.exports = {insertQDB:insertQDB}
module.exports = {qProvider:qProvider}
module.exports = {fileProvider:fileProvider}