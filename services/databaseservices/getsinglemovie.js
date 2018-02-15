let database = require('../../config/dbconnect');

async function singleMovie( mid ){
    let db = await database();
    return new Promise((res,rej)=>{
        db.collection("movies").findOne({id : mid},(err,movies) => {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(movies);
            }
        });
    });
}

module.exports.singleMovie=singleMovie;