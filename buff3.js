const buf1 = Buffer.from('This is Node.js class');
const buf2 = Buffer.from('54686973206973204e6f64652e6a7373', 'hex');
console.log(buf2.toString());
console.log(buf1.toString('hex'));