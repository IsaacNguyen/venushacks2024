import React, { useState } from 'react';

function SellerVerification() {
    const [key, setKey] = useState('');
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        setKey(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = localStorage.getItem('currentAddress');
        callApi(address, key);
    };

    const callApi = async (address, key) => {
        try{
            address = '1418 Old Janal Ranch Road Chula Vista, CA 91915'
            const response = await fetch(`http://localhost:3000/verify?address=${address}&key=${key}`);
            const data = await response.json(); // Parse response body as JSON
            console.log(data); // Log the parsed JSON data
            //return data; // Return the parsed JSON data
    
        } catch (err) {
          setError('Issue retrieving address data. Try again');
          console.log('ahhhh error')
        }
      };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Verifying Your Seller's Key!</h1>
                    <form onSubmit={handleSubmit}>
                    <label>
                        Seller's Key:
                        <input type="text" value={key} onChange={handleChange} required />
                    </label>
                    <button type="submit">Search</button>
                    </form>
                </header>
                {!error && (
                    <div>{error}</div>
                )}
            </div>
        </>
    )
}

export default SellerVerification;