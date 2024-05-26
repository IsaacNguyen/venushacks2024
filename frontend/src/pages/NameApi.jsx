import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nameData, setNameData] = useState(null);

  useEffect(() => {
    const savedNameData = localStorage.getItem('nameData');
    if (savedNameData) {
      setNameData(JSON.parse(savedNameData));
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    callNameApi(name);
  };

  
  const callNameApi = (name) => {
    console.log('Calling name API');
    var url = "https://globalname.melissadata.net/V3/WEB/GlobalName/doGlobalName";
    url += '?' + new URLSearchParams({
      'id': "W9uSu_FdnwyRUm4XUkTwM0**nSAcwXpxhQ0PC2lXxuDAZ-**",
      'format': "json",
      'full': name
    }).toString();
    
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setNameData(result);
        localStorage.setItem('nameData', JSON.stringify(result));
      })
      .catch(err => { throw err; });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Information Search</h1>
        <form onSubmit={handleNameSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleChange} required />
          </label>
          <button type="submit">Search</button>
        </form>
        {nameData && (
          <div>
            <h2>Name Data</h2>
            <pre>{JSON.stringify(nameData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;