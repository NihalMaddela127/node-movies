let database = require('../../config/dbconnect');

async function updateMovies(data, newData){
    let db = await database();
    return new Promise((res, rej) => {
        db.collection("movies").updateOne({id : data}, newData, function (err, result) {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(result);
            }
        });
    });
}

module.exports.updateMovies=updateMovies;