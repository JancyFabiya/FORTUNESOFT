const express = require('express');
const connectDatabase = require("./config/database")
const bodyParser = require('body-parser');


const cors = require ("cors")

const app = express()
const PORT = process.env.PORT || 5000;


// Connect to MongoDB

connectDatabase()


//Middleware

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({limit: '1000mb',extended:true}))
app.use(express.json())



app.use(
    cors({
        // origin: ["http://localhost:3000"],
        method : ["GET","POST","PUT","DELETE"],
        credentials: true,
    })
);
 // Route Import
 const movieRoutes  = require('./routes/movieRoute')
 // movie route
 app.use('/movies',movieRoutes )










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });