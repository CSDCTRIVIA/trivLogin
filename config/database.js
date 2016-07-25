/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// config/database.js

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');


uProvider = function(host, port) {
    this.db= new Db('UsersDB', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
    this.db.open(function(){});
    console.log("MongoDB Connect:" +host + ":" +port);
};

uProvider.prototype.getCollection= function(callback) {
    this.db.collection('AuthUsers', function(error, DBquestions) {
        if( error ) callback(error);
        else callback(null, DBquestions);
    });
};


uProvider.prototype.Save = function(questions,callback){
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
