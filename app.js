const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars').engine;

const app = express();

// Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json()

// Enkel minnesdatabas
let database = [];

// Routes
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/result', (req, res) => {
    const { body } = req
    database.push(body)
    res.render('result', { data: body });
});

app.get('/api/message', jsonParser, (req, res) => {
    res.json(database);
});

app.post('/api/message', jsonParser, (req, res) => {
    const { body } = req;
    database.push(body)
    res.json(body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

