const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/random-word', function(req,res){
    const words = ["car", "house", "dog", "cat", "tree", "computer", "phone", "book", "pen", "pencil"];
    const word = words[Math.floor(Math.random() * words.length)];
    res.send(word)
});



app.listen(3000)