const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Updated import
const route = require('./routes');

app.use(express.static('src/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
); // Updated instantiation

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
