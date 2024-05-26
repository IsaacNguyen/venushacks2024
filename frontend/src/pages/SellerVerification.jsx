import React, { useState } from 'react';

function SellerVerification() {
    const [seller, setSeller] = useState('');
    const [error, setError] = useState(null);
    const propData = JSON.parse(localStorage.getItem('propertyData'));

    const owners = [propData.Records[0].PrimaryOwner.Name1Full,
                    propData.Records[0].PrimaryOwner.Name2Full]
    
    const handleChange = (e) => {
        setSeller(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (owners.includes(seller)){
            console.log('winner!')
            //localStorage.setItem('sellerAuthenticity', 'good!')
        } else {
            console.log('loser')
            callApi(seller);
            // if statements saying medium or bad
        }
        
    };

    const callApi = async (seller_name) => {
        try{
          const response = await fetch(`http://localhost:3000/verify?seller=${seller_name}`);
          const result = await response.json();
          localStorage.setItem('sellerName', JSON.stringify(result));
          const value = JSON.parse(localStorage.getItem('sellerName'));
          console.log(value)
    
    
        } catch (err) {
          setError('Issue retrieving address data. Try again');
          console.log('ahhhh error')
        }
      };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Verifying Your Seller's Name!</h1>
                    <form onSubmit={handleSubmit}>
                    <label>
                        Seller Name:
                        <input type="text" value={seller} onChange={handleChange} required />
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