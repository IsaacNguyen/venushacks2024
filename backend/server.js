const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors()); 

app.get("/api", (req, res) => {
    res.json({"users": ["userone", "usertwo"]})
});

app.listen(3000, () => {console.log("server started port 3000")});

