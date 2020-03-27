// import express
const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const users = [ "john", "paul", "jack" ]

let messages = [];




app.get('/', async (req, res) => {

    res.send('home')
})


app.get('/messages', async (req, res) => {

    console.log('getting the messages');
    
    res.json(messages);

    console.log(req.body);

    console.log(messages);

});

app.post('/messages', async (req, res) => {

    console.log('messages post');

    console.log(req.body);

    let newMessage = {
        user : req.body.user,
        content : req.body.content,
        date : req.body.date
    }

    messages = [...messages, newMessage];

    res.json({ message : "message received" })

    if (messages.length > 15){
        messages.shift();
    }
    
})

app.post('/user', async (req, res) => {

    console.log('register user');

    console.log(req.body);


})



app.listen(3001, () => {
    console.log('server started');
    
});


