const express = require('express');
const router = express.Router();
const addService = require('../services/databaseservices/addmovie');
const getService = require('../services/databaseservices/getmovies');
const getsingleService = require('../services/databaseservices/getsinglemovie');
const updateService = require('../services/databaseservices/updatemovie');

router.get('/movies', async function (req, res, next) {
    try{
        let data = await getService.getMovies();
        res.json(data);
    }
    catch(err){
        next(err);
    }
});

router.get('/movies/:id', async function (req, res, next) {
    let id = req.params.id;
    try{
        let data = await getsingleService.singleMovie(id);
        res.json(data);
    }
    catch(err){
        next(err);
    }
});

router.post('/movies', async function (req, res, next) {
    let newData = req.body;
    try{
        let data = await addService.addMovie(newData);
        res.json(data);
    }
    catch(err){
        next(err);
    }
});


router.put('/movies/:id', async function(req, res, next){
    let id = req.params.id;
    let newMovie = req.body;
    try{
        let data = await updateService.updateMovies(id, newMovie);
        res.json(data);

    }
    catch(err){
        next(err);
    }
})

router.use('error',function(err, req, res, next){
    if(err){
        console.error(err);
    }
});

module.exports = router;
