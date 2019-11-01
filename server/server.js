const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');

//import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRoutes);


//connects the back end code with the database
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