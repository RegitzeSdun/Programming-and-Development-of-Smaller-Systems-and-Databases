const express = require('express');
const itemsRouter = require('./routes/items');
const app = express();
app.use(express.json());

app.use('/items',itemsRouter);
app.use('/',function(req,res) {
    res.send('Todos api works')
});

const port = 4001;
app.listen(port, () => {
    console.log('Server is listening on port '+ port);
});