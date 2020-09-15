
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router'); 
const fallRouter = require('./routes/fallCloset.router'); // added this (this corresponds with the 'added this' below)
const winterRouter = require('./routes/winterCloset.router'); // added this (this corresponds with the 'added this' below)
const springSummerRouter = require('./routes/springSummerCloset.router'); // added this (this corresponds with the 'added this' below)
const miscRouter = require('./routes/misc.router'); // added this
const addItemsRouter = require('./routes/addItems.router') // not sure if I need this here or not to path to the add items page


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/seasons/fall', fallRouter); // added this
app.use('/api/seasons/winter', winterRouter); // added this
app.use('/api/seasons/spring-summer', springSummerRouter); // added this
app.use('/api/misc', miscRouter); // added this
app.use('/api/addItems', addItemsRouter) // added this

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
