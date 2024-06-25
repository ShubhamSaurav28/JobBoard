const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('');
const PORT = process.env.PORT;
const mongouri = process.env.MONGOURI;

mongoose.connect(mongouri)
    .then(()=>{
        console.log("mongoDB connected");
    })
    .catch((err)=>{
        console.log(`Error Occured: ${err}`);
    })

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
});
