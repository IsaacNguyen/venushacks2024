import React, { useState } from 'react';

function AddressInput() {
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callApi(address);
  };

  const callApi = (ff) => {
    console.log('hello');
    var url = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    url += '?' + new URLSearchParams({
      'id': "W9uSu_FdnwyRUm4XUkTwM0nSAcwXpxhQ0PC2lXxuDAZ-",
      'cols': "GrpAll",
      'format': "json",
      'ff': ff
    }).toString();

    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        console.log(result)
    })
      .catch(err => { throw err; });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Property Information Search</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Property Address:
            <input type="text" value={address} onChange={handleChange} required />
          </label>
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default AddressInput;