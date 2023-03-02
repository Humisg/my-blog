const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
// require('path')
const verifyToken = require('./middlewares/auth')
const errorHandler = require('./middlewares/errorHandle')
const routes = require('./routes/index')

const app = express();

app.use(cors());
// app.use(verifyToken)
app.use(express.json());
app.use(errorHandler)
app.use(express.urlencoded({ extended: false }));
app.use(routes);
routes.use('/public', express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT;
const uri = 'mongodb://127.0.0.1:27017/blog_test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('Failed to connect to MongoDB');
    } else {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    }
});
