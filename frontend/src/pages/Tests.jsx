import React, { useState, useEffect } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
//import './App.css';

function Tests() {
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
      'id': "g5JO_3nBG3r5Yp2ERCXd6y**nSAcwXpxhQ0PC2lXxuDAZ-**",
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
        <img
          src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=47.541527,-122.120798&heading=151.78&pitch=-0.76&key=AIzaSyCU2OQ41M3mCpUPXloeWVIxadg-H21DP3A"
          alt="Street View"
        />
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCU2OQ41M3mCpUPXloeWVIxadg-H21DP3A&q=Space+Needle,Seattle+WA"
          title="Map Location"
        ></iframe>

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

export default Tests;
