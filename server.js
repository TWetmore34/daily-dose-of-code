const express = require('express');
const routes = require('./controllers');
const path = require('path');
const session = require('express-session');
const handlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3306;

const sequelize = require('./config/connection')

const sess = {
    secret: 'Super secret secret',
    // add maxAge for cookie expiration (use for streaks)
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sess))
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