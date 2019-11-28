const express = require('express');
const cors = require('cors');
const config = require('./config');
const loadTestData = require('./testData');
const mongoose = require('mongoose');
const helmet = require('helmet');
const sanitize = require('mongo-sanitize');
const path = require('path');

const app = express();

//import routes
const postRoutes = require('./routes/post.routes');

//serve static files from react app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRoutes);

app.use((req, res, next) => {
    sanitize(req.body);
    next();
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


//connects the backend code with the database
mongoose.connect(config.DB, { useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});

db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function() {
    console.log('Server is running on port:', config.PORT);
});