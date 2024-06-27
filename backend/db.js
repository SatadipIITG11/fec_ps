const { MongoClient } = require('mongodb')

let dbConnection

let url = 'mongodb+srv://goenkatanay:LHnN3v08NdrG2A1A@lifeledger.vv26r9t.mongodb.net/'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(url)
            .then((client) => {
                dbConnection = client.db("lifedb1")
                return cb();
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection








}