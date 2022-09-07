//const jsonStr = '{"Name":"Romeo","Age": 23,"Gender":"Male"}';
const fs = require('fs');
fs.readFile('P1.json',(err, data) => {
    if(err) throw err;
    let student = JSON.parse(data);
    
    //console.log(JSON.stringify(student,null,10));
    console.log(student);
    console.log(typeof student);
    console.log(typeof student.gender);
});