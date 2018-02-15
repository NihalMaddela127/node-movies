const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
// const path = require('path');
const cors = require('cors');
const port = process.env.port;
const moviesRoutes = require('./routes/movieroutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use('/', moviesRoutes);

// if(!module.parent){
    app.listen(3000,function(){
    console.log('Listen 3000');
});
// }
