let express = require('express')
let router = express.Router()

let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

router.post('/', (req, res, next) => {
    mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
        if (err) {
            console.log('库连接失败')
        } else {
            let db = client.db('myweb');
            let regist = db.collection('user');
            regist.find({ username: req.body.username, password: parseInt(req.body.password) }, {}).toArray(
                (err, arr) => {
                    if (arr.length > 0) {
                        res.send({ err: 0 })
                    } else {
                        res.send({ err: 1 })
                    }
                }
            )
        }
    })
})

module.exports = router;