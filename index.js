const express = require('express');
const path = require('path');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;
const URL = process.env.URL || 'http://localhost:';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on ${URL}${PORT}`);
    } else {
        console.log(`Error: ${err}`);
    }
});
