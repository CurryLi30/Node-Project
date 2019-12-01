let express = require('express')
let router = express.Router()

let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

router.get('/', (req, res, next) => {
    mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
        if (err) {
            console.log('库连接失败')
        } else {
            let db = client.db('myweb');
            let list = db.collection('list')
            list.find().toArray((err,arr)=>{
                res.send(arr);
            })
        }
    })
})

module.exports = router;