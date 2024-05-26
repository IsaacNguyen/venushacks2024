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
        console.log('success finding property data!')
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({error: 'An error occurred'});
    }
});

app.get('/verify', async (req, res) =>{
    const { seller } = req.query;

    if (!seller) {
        return res.status(400).json({ error: "Seller is required" });
    }

    const melissaNameURL = "https://globalname.melissadata.net/V3/WEB/GlobalName/doGlobalName/";
    const params ={
        'id': process.env.MELISSA_API_KEY,
        'format': "json",
        'full': seller
    };

    try {
        const response = await axios.get(melissaNameURL, {params});
        res.json(response.data);
        console.log('success finding name data!');
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({erro: 'An error occurred'});
    }
})

app.get('/create_key', async (req, res) => {
    const ssn = req.query.ssn;
    const address = req.query.address;
    const name = req.query.name;
    // actual SSN look up, uncomment in actual code

    // const params = new URLSearchParams({
    //     'id': process.env.MELISSA_API_KEY,
    //     'SSN': ssn,
    //     'full': name,
    // });

    // const urlWithParams = baseURL + '?' + params.toString();

    // try {
    //     const response = await axios.get(urlWithParams);    
    // 
    //     const verificationResult = response.data.Records[0].Results;
    //     const isSSNVerified = verificationResult === 'SN04'; // 'SN04' means valid match
    //     
    // if (!isSSNVerified){
    //     res.send('Your SSN does not match!')

    // }
    // } catch (error) {
    //     console.error("Error during SSN verification:", error);
    //     return false;
    // }
    console.log(address,name,ssn);
    const melissaPropURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
        id: process.env.MELISSA_API_KEY,
        cols: "GrpAll",
        format: "json",
        ff: address,
    };

    try {
        console.log('success finding property data!')
        const response = await axios.get(melissaPropURL, {params});
        res.json(response.data);
        // const houseData = response.data.json();
        // owners = [houseData.Records[0].PrimaryOwner.Name1Full, houseData.Records[0].PrimaryOwner.Name2Full]
        // console.log(owners)
        // if (owners.includes(name)){
        //     const key = generateRandomString(10);
        //     console.log(key);
        //     res.send('key');
        // }
        // else
        // {
        //     res.send('Not on the lease!');
        // }
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({error: 'An error occurred'});
    }
   
})


app.listen(port, () => {console.log("server started port 3000")});

