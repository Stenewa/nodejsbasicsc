const fs = require('fs');
//using an encoding utf 8 ensures that the incoming data is produced in reaale format
const readStream = fs.createReadStream('./sampledocs/sample.txt',{encoding: 'utf8'});
//creating a write stream
// const writeStream = fs.createWriteStream('./sampledocs/sample4.txt')
// readStream.on('data', (chunk) => {
//     console.log('....incoming data chunk boo...');
//     console.log(chunk);
//     writeStream.write('\n....a new chunk of data comin boo boo\n');
//     writeStream.write(chunk);
// })

//using piping as an allternative to the above code
const pipeWriteStream = fs.createWriteStream('./sampledocs/sample5.txt');
readStream.pipe(pipeWriteStream);