const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

// MongDB 연결 및 서버 연결
const { MongoClient } = require('mongodb')
let db
const url = 'mongodb+srv://chanhui:cksgml369!@chan.7gc65vr.mongodb.net/?retryWrites=true&w=majority&appName=chan'
new MongoClient(url).connect().then((client)=>{
    console.log('DB 및 서버 연결 성공')
    db = client.db('forum')
    app.listen(3000, function(){
    console.log(__dirname)
    });
}).catch((err)=>{
    console.log(err)
})


app.get('/', (req, res) => {
    res.render(__dirname + '/index.ejs');
});

app.get('/dptt', (req, res) => {
    res.render(__dirname + '/index.ejs');
});

app.get('/type', (req, res) => {
    res.render(__dirname + '/type.ejs');
});

app.get('/result', (req, res) => {
    res.render(__dirname + '/index.ejs');
});
app.post('/result', async (req, res) => {
    console.log(req.body)
    await db.collection('post').insertOne(req.body)
});

