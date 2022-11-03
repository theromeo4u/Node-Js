var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/', function(req , res ){
    res.cookie('course','html').send('Our website has set the cookies');
    console.log('cookies', req.cookies);
});
app.get('/clear' ,function(req,res){
    res.clearCookie('course','html');
    res.send('Cookie cleared');
});
app.listen(4000);