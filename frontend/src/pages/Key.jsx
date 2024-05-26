import React, { useState } from 'react';
import styles from './styles/Key.module.css'; // Make sure the path matches your CSS file
import cow from '../assets/cowkey.png';
function InfoForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        ssn: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the formData, e.g., send to an API or log to console
        console.log(formData);
        alert('Form submitted! Check the console for data.');
    };

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
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    SSN:
                    <input
                        type="text"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleChange}
                        required
                        pattern="\d{3}-\d{2}-\d{4}" 
                        title="SSN format should be XXX-XX-XXXX"
                    />
                </p>
                <button type="submit">Generate Key</button>
            </form>
            </div>
            <div className={styles.keyImage}>
                <img src={cow} alt="Key" />
            </div>
        </div>
    );
}

export default InfoForm;
