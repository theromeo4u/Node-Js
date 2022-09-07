const fs = require('fs');
let student = {
    name : "Romeo",
    age : 23,
    gender : "male",
    department : "English",
    car : "Honda"
};
//let data = JSON.stringify(student,['car'],10);
let data = JSON.stringify(student,null,10);
fs.writeFile('P2.json',data,data1, (err) => {
    if(err) throw err;
    console.log('Data written to file');
});