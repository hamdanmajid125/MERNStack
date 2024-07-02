require('dotenv').config()
const express = require('express')
const app = express()

const authrouter = require('./router/auth-router')
const contactrouter = require('./router/contact-router')

const connectDb = require('./utils/db')

const errorMiddleWare = require('./middleware/error-middleware')

app.use(express.json())
app.use("/api/auth",authrouter)
app.use("/api/contact",contactrouter)
app.use(errorMiddleWare)


app.get('/',(request, response) => {
    response.status(200).send('Hello');
});

connectDb().then(()=>{
    app.listen(5000, ()=>{
        console.log(`port is runnin on 5000`);
    })
})
