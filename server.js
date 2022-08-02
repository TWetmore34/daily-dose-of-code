const express = require('express');
const routes = require('./controllers')
const path = require('path')
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inform Express.js on which template engine to use
app.engine('handlebars', handlebars({layoutsDir: `${__dirname}/views/layouts`}));
app.set('view engine', 'handlebars');

app.use(routes)

app.get('/login', (req, res)=> {
    res.render('login', {layout: 'main'})
})
app.get('/challenges', (req, res)=> {
    res.render('challenges', {layout: 'main'})
})
app.get('/profile', (req, res)=> {
    res.render('profile', {layout: 'main'})
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});