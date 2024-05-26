import React, { useState } from 'react';
import axios from 'axios';

function SellerKey(){
    const [address, setAddress] = useState('');
    const [ssn, setSSN] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [returnName, setReturnName] = useState(null);
    const [key, setKey] = useState(null);

    const handleAddyChange = (e) => {
        setAddress(e.target.value);
      };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };

      const handleSSNChange = (e) => {
        setSSN(e.target.value);
      };

      const handleKeyChange = (e) => {
        setKey(e.target.value);
      }

    
      const handleSubmit = (e) => {
        e.preventDefault();
        callApi(address, name, ssn);
      };
     
      // const uploadDB = (e) => {
      //   e.preventDefault();
      //   uploadKey(address, key);
      // }

      const uploadKey = async (address, key) => {
        try {
            const response = await axios.post('http://localhost:3000/upload_key', { address, key });
            console.log('Key uploaded successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error uploading key:', error.response ? error.response.data : error.message);
            throw error;
        }
    };


      const callApi = async (address, name, ssn) => {
        try{
            const response = await fetch(`http://localhost:3000/create_key?address=${address}&name=${name}&ssn=${ssn}`);
            const propData = await response.json();

            const owners = [propData.Records[0].PrimaryOwner.Name1Full,
            propData.Records[0].PrimaryOwner.Name2Full]
            
            console.log(owners);
            if (owners.includes(name)){
                const key = generateRandomString(12);
                console.log(key);
                setReturnName('your key is: ' + key);
                setKey(key);
                uploadKey(address, key);
            }
            else {
                console.log('fail!')
                setReturnName('failure to verify you');
            }

        } catch (err) {
          setError('Issue retrieving address data. Try again');
          console.log('ahhhh error')
        }
      };
      
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Create Moove Key</h1>
                <form onSubmit={handleSubmit}>
                  <label>
                      Property Address:
                      <input type="text" value={address} onChange={handleAddyChange} required />
                      Full Name:
                      <input type="text" value={name} onChange={handleNameChange} required />
                      SSN
                      <input type="text" value={ssn} onChange={handleSSNChange} required />
                  </label>
                  <button type="submit">Search</button>
                </form>
            </header>
            {!error && (
                <div>{error}</div>
            )}
            <p>{returnName}</p>
        </div>
    )
}

export default SellerKey;