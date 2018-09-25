const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        message: 'Hiiiiii'
    })
});

app.listen(PORT, () => {
    console.log('App is running');
})