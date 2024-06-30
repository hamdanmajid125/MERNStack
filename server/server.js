const express = require('express')
const app = express()
const router = require('./router/auth-router')
app.use("/api/auth",router)

app.get('/',(request, response) => {
    response.status(200).send('Hello');
});

app.listen(5000, ()=>{
    console.log(`port is runnin on 5000`);
})