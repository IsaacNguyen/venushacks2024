import React, { useState } from 'react';
import styles from './styles/Key.module.css'; // Make sure the path matches your CSS file
import cow from '../assets/cowkey.png';
import axios from 'axios';

function Key() {
    const [address, setAddress] = useState('');
    const [ssn, setSSN] = useState('');
    const [name, setName] = useState('');
    const [returnName, setReturnName] = useState(null);
    const [error, setError] = useState(null);
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

    

    const callApi = async (address, name, ssn) => {
        try{
            const response = await fetch(`http://localhost:3000/create_key?address=${address}&name=${name}&ssn=${ssn}`);
            const propData = await response.json();
            console.log(propData)
            const owners = [propData.Records[0].PrimaryOwner.Name1Full,
            propData.Records[0].PrimaryOwner.Name2Full]
            
            console.log(owners);
            if (owners.includes(name)){
                const key = generateRandomString(12);
                console.log(key);
                setReturnName('your milKEY is: ' + key);
                setKey(key);
                uploadKey(address, key);
            }
            else {
                console.log('fail!')
                setReturnName('Could not verify you');
            }

        } catch (err) {
          setError('Issue retrieving address data. Try again');
          console.log('ahhhh error')
        }
      };
      
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
    
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    return (
        <div className={styles.key}>
            <div className={styles.form}>
            <h1>Keys</h1>
            <h2>Generate a secure key for identity verification</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </p>
                <p>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleAddyChange}
                        required
                    />
                </p>
                <p>
                    SSN:
                    <input
                        type="text"
                        name="ssn"
                        value={ssn}
                        onChange={handleSSNChange}
                        required
                    />
                </p>
                <button type="submit">Generate Key</button>
            </form>
            <div>{returnName}</div>
            </div>
            <div className={styles.keyImage}>
                <img src={cow} alt="Key" />
            </div>
        </div>
    );
}

export default Key;
