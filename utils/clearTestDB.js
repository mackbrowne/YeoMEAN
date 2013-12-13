//clear test DB
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mean-test', function(err){
  if(err) throw err;
  mongoose.connection.db.dropDatabase(function(err){
    if(err) throw err;
    console.log('success')
    process.exit();
  });
});