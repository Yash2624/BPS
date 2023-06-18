const express = require('express');
const app = express();
const path = require('path');
const config = require("./config/config");
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const userRoutes = require ('./routes/userRoutes')

const userController = require ('./controllers/userController')

const auth_middleware = require('./middlewares/auth-middleware')

const cors = require ('cors')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())


const port = process.env.PORT

const DB = 'mongodb+srv://Yash:Yash2624@cluster0.vcdnyx2.mongodb.net/BPSdata?retryWrites=true&w=majority'

const ejs = require ("ejs");
const dotenv = require("dotenv");
dotenv.config()

mongoose.Promise = global.Promise;

// mongoose.connect(config.MONGODB_URI);



mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to the database: ${config.mongoUri}`);
  });


app.use(express.json())

app.use("/api/user/", userRoutes)



app.use(express.static(path.join(__dirname, "Static")));


app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render("index.ejs");
});



app.get('/login', (req, res) => {
    res.render('login.ejs');
     });


   
     app.get('/signup', (req,res)=>{
        res.render('signup.ejs')
        })

        app.get('/logged', (req,res)=>{
            res.render('logged.ejs')
            })

app.listen(config.PORT, function(err){
    if (err){
        return console.log( "An error occured");
    }
    console.log("The server is running on port " + config.PORT);
});
