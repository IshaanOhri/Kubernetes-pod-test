const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        success: true,
        dateTime: Date.now(),
        name: 'Ishaan'
    });
});

app.listen(3000, () => {
    console.log('App listening on port: 3000');
});