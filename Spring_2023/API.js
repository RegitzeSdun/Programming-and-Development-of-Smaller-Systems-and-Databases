const express = require('express');
var bodyParser = require('body-parser')
const app = express();

const PORT = 4001;

 
// create application/json parser
var jsonParser = bodyParser.json()
 

//const monsters = [
//    {type: 'werewolf'},
//    {type: 'hydra'},
//    {type: 'chupacabra'}
//];

const monsters = {'1': {name:'cerberus',age:'4'}};

app.get('/monsters',(req, res, next) => {
    res.send(monsters);
});


app.put('/monsters/:id',(req, res, next) => {
    const monsterUpdates = req.query;
    monsters[req.params.id] = monsterUpdates;
    res.send(monsters[req.params.id]);
});

 
// POST /api/users gets JSON bodies
app.post('/monsters', jsonParser, function (req, res) {
    // create user in req.body
    res.send(req.body);
  })
  

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
