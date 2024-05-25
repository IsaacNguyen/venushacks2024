const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000;

app.use(cors()); 

app.get("/api", (req, res) => {
    res.json({"users": ["userone", "usertwo", "poop"]})
});



app.listen(port, () => {console.log("server started port 3000")});

