const buff = Buffer.alloc(5);
console.log(buff);
const buff1 = Buffer.alloc(5, 'Hello');
console.log(buff1);
console.log(buff.fill('a'));
