const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
       message: 'your user was registered',
       email: req.body.email,
       password: req.body.password
    });
});

const PORT = 8081;
app.listen(process.env.PORT || PORT, () => {
    console.log('Server running on port ' + PORT);
});