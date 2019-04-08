const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
       message: 'your user was registered'
    });
});

const PORT = 8081;
app.listen(process.env.PORT || PORT, () => {
    console.log('Server running on port ' + PORT);
});