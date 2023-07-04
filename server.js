const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('styles'))

app.get('/', (req, res) => {
    app.render('index');
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})