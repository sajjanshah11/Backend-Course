const express = require('express');
const app = express();
let port = '8080';

app.listen(port, function () {
    console.log(`server running succesfully at ${port}`)
})

app.get('/home',(req,res) => {

    console.log(__dirname);
    res.sendFile('./views/index.html' , {root:__dirname})
})

app.get('/',(req,res)=>{
    res.send("hello from main page")
})

let obj = {
    name:"sajjan"
}


app.get('/user',(req,res)=>{
    res.send(obj)
})


app.get('/xmlpage',(req,res)=>{
    res.sendFile('./views/test.xml' , {root:__dirname})
})





