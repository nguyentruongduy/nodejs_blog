const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Updated import
const route = require('./routes');
const methodOverride = require('method-override');

const db = require('./config/db');
//connect to db
db.connect();

app.use(express.static('src/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
); // Updated instantiation

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
