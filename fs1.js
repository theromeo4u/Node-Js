var fs = require("fs");

fs.readFile('Index.txt',function(err,data){
    if(err)
    {
        return console.error(err);
    }
    console.log("Asynchronous read: "+ data.toString());
    
});