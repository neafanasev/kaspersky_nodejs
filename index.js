const express = require('express')
const config = require('config')
const corsMiddleware = require('./middleware/cors.middleware')
const generateUsers = require('./services/generateUsers')

const app = express()
const PORT = process.env.PORT || config.get('serverPort')

app.use(corsMiddleware)

app.get('/get_users', (req, res) => {
    console.log(req.query.number);
    return res.json(generateUsers(req.query.number))
});

app.listen(PORT, (err) =>{
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});