import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [address, setAddress] = useState('');
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    // Load property data from local storage when the component mounts
    const savedPropertyData = localStorage.getItem('propertyData');
    if (savedPropertyData) {
      setPropertyData(JSON.parse(savedPropertyData));
    }
  }, []);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callApi(address);
  };

  const callApi = (ff) => {
    var url = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    url += '?' + new URLSearchParams({
      'id': "W9uSu_FdnwyRUm4XUkTwM0**nSAcwXpxhQ0PC2lXxuDAZ-**",
      'cols': "GrpAll",
      'format': "json",
      'ff': ff
    }).toString();
    
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setPropertyData(result);
        localStorage.setItem('propertyData', JSON.stringify(result));
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
        {propertyData && (
          <div>
            <h2>Property Data</h2>
            <pre>{JSON.stringify(propertyData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
