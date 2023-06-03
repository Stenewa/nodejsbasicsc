//accessing the fs module
const fs = require('fs');
//reading and displaying data in a file
fs.readFile('./sampledocs/sample.txt', (err, data) => {
    if (err) {
        console.log('Its an error babe,sorry:(',err)
    }
    else {
        console.log(data.toString())
        //use toString() function since data is released as buffer info
    }
 });
//how to rewrite an existing file
fs.writeFile('./sampledocs/sample2.txt', 'hey mami, this text was rewritten', () => {
    console.log('we did it')
});
//write a new file
fs.writeFile('./sampledocs/sample3.txt', 'I made a new file babe', () => {
    console.log('file creation successful')
});
//deleting a file



//ctl
//ceating a new dir

if (!fs.existsSync('./sampledocs/sampledir')) {
    fs.mkdir('./sampledocs/sampledir', () => {
        console.log('the sample folder was created boo')
    })
    

} else {
    //deleting a dir
    fs.rmdir('./sampledocs/sampledir', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('the folder was successfully deleted')
    });
    
};
if (fs.existsSync('./sampledocs/sample4.txt')) {
    //unlink works welll with small files
    fs.unlink('./sampledocs/sample4.txt', (err) => {
        if (err) {
           // fs.writeFile('./sampledocs/sample4.txt', 'this file');
            console.log(err);
            
        }
        console.log('File successfully deleted');
    })
}