let database = require('../../config/dbconnect');

async function getMovies( err, res ){
    let db = await database();
    return new Promise((res,rej)=>{
    db.createCollection("movies", { strict: true }, function (err) {
        db.collection("movies").find({}).toArray(function(err, movies) {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(movies);
            }
        });
    });
    });
}

module.exports.getMovies=getMovies;