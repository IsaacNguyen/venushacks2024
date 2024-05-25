import { useState, useEffect } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])


  useEffect(() =>{
    fetch("http://localhost:3000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
    <div>
       {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user,i) => (
            <p key ={i}>{user}</p>
          ))
        )}
    </div>
    </>
  )
}

export default App
