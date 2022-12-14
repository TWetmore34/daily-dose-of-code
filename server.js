// initialize express and grab routes folder
const express = require('express');
const routes = require('./controllers');
const path = require('path');
// import sessions and handlebars
const session = require('express-session');
const handlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// db login
const sequelize = require('./config/connection')

// init session obj
const sess = {
    secret: 'Super secret secret',
    // add maxAge for cookie expiration (use for streaks)
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 //should add up to a max age of 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sess))
// Set up Handlebars.js engine with custom helpers
const hbs = handlebars.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});
