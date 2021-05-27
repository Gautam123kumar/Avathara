const express = require ('express');
const app = express();
const routes = require('./routes/gameRoutes')
const connect =require('./connection/conn');

app.use('/api',routes)

const PORT = 3000;
app.listen(PORT,(req,res)=>{
    console.log(`server run on ${PORT}`);
})