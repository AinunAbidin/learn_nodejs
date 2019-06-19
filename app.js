const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const firebase = require('firebase');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
//untuk menambah folder baru seperti css

// app.set('view engine','ejs');
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//initialise firebase
var config = {
    apiKey: "AIzaSyBs0hnpaciPeA_Xy48J2jl1x7UqNDo7NRQ",
    authDomain: "proyek-intern.firebaseapp.com",
    databaseURL: "https://proyek-intern.firebaseio.com",
    projectId: "proyek-intern",
    storageBucket: "proyek-intern.appspot.com",
    messagingSenderId: "614298060687"
  };
  firebase.initializeApp(config);
//deklarasi database
  var database = firebase.database();
////input database kedalam firebase
app.post('/addData', (req,res) => {
    console.log(req.body);
    data = req.body

    key = database.ref().child('posts').push().key;

    database.ref('Person/' + data.nama).set({
        key,
        nama: data.nama,
        nim: data.nim
    })
    res.redirect('hasil')
})

//read data ke frontend
app.get('/hasil', (req,res) => {
    database.ref("Person").once('value', (snapshot) => {
        // console.log(snapshot.val());
        data = snapshot.val();
        // snapshot.forEach((data) => {
        //     console.log(data.key);
        // 
        res.render('hasil', {
            data : data
        })
    })
})

// delete data
app.post('/delete', (req,res) => {
    console.log(req.body.del);
    data = req.body.del;

    ref = database.ref('Person/' + data);
    ref.remove()
    res.redirect('/hasil')
})
//app.post('/hasil',(req,res)=>{
//    console.log(req.body)
//    console.log(req.body.nama)
//    console.log(req.body.nim)
//    res.render('hasil',{
 //       nama : req.body.nama,
  //      nim : req.body.nim
   // })
//})
//read data ke frontend

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('*',(req,res)=>{
    res.send('404 not found')
})

app.listen(3000,()=>{
    console.log('cobaaa')
})