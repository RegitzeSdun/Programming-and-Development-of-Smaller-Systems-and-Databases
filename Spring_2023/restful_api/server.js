const express = require('express');

const itemsRouter = require('./routes/items');

const app = express();
app.use(express.json());
app.use('/items',itemsRouter)
app.use('/', function(req,res){
    res.send('Restful api works');
});

const port = 3000
app.listen(port, () => {
    console.log('Server listening on port '+ port)
});