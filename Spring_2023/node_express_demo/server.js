console.log('Server-side code running');
const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, ()=> {
    console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req,res)=> {
    res.sendFile(_dirname + '/index.html');
})

var db = [];
app.post('/clicked',(req,res)=> {
    const click = {clickTime: new Date()};
    console.log(click);
    db.push(click)
    console.log('click added to db');
    res.sendStatus(201);
});

app.get('/clicks',(req, res) => {
    res.send(db)
});