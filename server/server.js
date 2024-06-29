const express = require('express')
const app = express()

app.get('/',(request, response) => {
    response.status(200).send('Hello');
});

app.listen(5000, ()=>{
    console.log(`port is runnin on 5000`);
})