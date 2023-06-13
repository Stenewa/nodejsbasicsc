//creating a sever
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //setting a server response
    //adding a html response
    res.setHeader('Content-type', 'text/html');

    //attach a response obj(file)
    // fs.readFile('./server/thisfile.html', (err, data) => {
    //     if (err)
    //     {
    //         console.log(err);
    //         res.end(); }
    //     else {
    //         res.write(data);
    //         // res.end(data) can be used as an alternative if a single file is being sent
    //         res.end();}
      
    // })
 
    
    // });
    //activate server to listen in for requests
    //sending multiple files as a resonse
    let path = './server/';
    switch (req.url) {
        case '/':
            path += 'thisfile.html';
            //inserting individual status codes depending on the file
            res.statusCode = 200;
            break;
        case '/about.html':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //making a redirect page
        case '/aboutpage.html':
            //rdirection status code
            res.statusCode = 301;
            res.setHeader('Location', '/about.html');
            res.end();
            
        default:
            path += 'page404.html';
            res.statusCode = 400;
        
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })});
    server.listen(3000, 'localHost', () => {
        console.log('Listening for requests')
    });

//requests and responses
//a server can only process a new request after the servers are refreshed
