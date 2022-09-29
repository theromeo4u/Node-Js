var express = require('express');
var app = express();
app.get('/hi',function (req,res) {
    res.sendFile(__dirname+"/"+"test.txt",function(err){
        if(err)
        {
            res.send(err);
        }
        else
        {
            console.log('File Sent Successfully');
        }
    });
    res.sendFile(__dirname+"/"+"Information Security  Privacy Syllabus.pdf",function(err){
        if(err)
        {
            res.send(err);
        }
        else
        {
            console.log('File Sent Successfully');
        }
    });
    
});
app.get('/a',function (req,res) {
    res.sendFile(__dirname+"/"+"test.txt",function(err){
        if(err)
        {
            res.send(err);
        }
        else
        {
            console.log('File Sent Successfully');
        }
    });
    res.sendFile(__dirname+"/"+ "Information Security  Privacy Syllabus.pdf",function(err){
        if(err)
        {
            res.send(err);
        }
        else
        {
            console.log('File Sent Successfully');
        }
    });
    
});
app.listen(2000,function(err)
{
    if(err)
        console.log(err);
    console.log("Server Started");
});