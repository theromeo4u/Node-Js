var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.download('test1.txt',function(err){
        if (err) {
            res.send("No such File");
        }else{
            console.log("File Download Successfully: ");
        }
    });
        
});
app.listen(2000);