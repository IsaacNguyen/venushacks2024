const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
const port = 3000;

app.use(cors()); 

app.get("/property", async (req, res) => {
    const { address } = req.query;

    if (!address) {
        return res.status(400).json({ error: "Address is required" });
    }

    const melissaPropURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
        id: process.env.MELISSA_API_KEY,
        cols: "GrpAll",
        format: "json",
        ff: address,
    };

    try {
        const response = await axios.get(melissaPropURL, {params});

        res.json(response.data);
        console.log('success!')
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({erro: 'An error occurred'});
    }
});



app.listen(port, () => {console.log("server started port 3000")});

