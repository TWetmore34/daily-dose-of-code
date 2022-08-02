const express = require('express');
const routes = require('./controllers');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection')


// Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inform Express.js on which template engine to use
app.engine('handlebars', handlebars({layoutsDir: `${__dirname}/views/layouts`}));
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});