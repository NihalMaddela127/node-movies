confid -> dbconnect :

    created a db with 'use movies'
    created collection with createCollection("movies")
    
    Url retreived from .env file
    used a Promise to return connection variable database and exported function

routes -> movieroutes :

    services imported with require to use respective service function
    handled routes with next() -> last middleware error handler
    respective crud operations with get, post, put with express router are used and exported

services -> getdata, getsingledata, adddata, updatedata with mongodb connection as :
    // db from dbconnect config file
    db.collection. {insertOne, find, updateOne etc} to work on database