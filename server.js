const express = require('express');
const app = express();
const port = '5000';

app.listen(port,function(){
    console.log(`server running succesfullt at ${port}`);
})

app.get('/home',(req,res)=>{
    res.send("this is the response from server.js from home page")
})

app.use(express.json());
app.use(express.static('public'));

//Routing in Express
const userRouter = express.Router();
const authRouter = express.Router();

app.use('/user',userRouter);
app.use('/auth',authRouter);
//mounting in routes
userRouter
    .route('/')
    .get(getUser)
    .post(createUser)
    .patch(updateUser)

userRouter
    .route('/:id')
    .get(getUserById)

authRouter
    .route('/signup')
    .post(signUpUser)
    

let user = [];

function signUpUser(req,res){

    let {email,name,password} = req.body;

    user.push({email,name,password});

    console.log('user',req.body)

    res.json({
        message:'user signedup',
        user:req.body
    })
}

// app.get('/user',getUser)

function getUser(req,res)  {
    res.json(user)
}

// app.post('/user',createUser)

function createUser(req,res){
    user = req.body
    res.send("data has been added succesfully")
}

// app.patch('/user',updateUser)

function updateUser(req,res) {
    let obj = req.body

    for(let key in obj) {
        user[key] = obj[key]
    }

    res.json(user)

}

//param router

app.get('/user/:id', getUserById)

function getUserById(req,res){
    console.log(req.params);
    res.send(req.params.id);
}