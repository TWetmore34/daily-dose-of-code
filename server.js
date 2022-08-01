const express = require('express');
const routes = require('./controllers')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});