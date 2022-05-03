const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/home', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/aboutme', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/aboutme.html');
});

app.get('/myworks', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/myworks.html');
});


app.listen(3000, () => console.log('Server running on port 3000'));