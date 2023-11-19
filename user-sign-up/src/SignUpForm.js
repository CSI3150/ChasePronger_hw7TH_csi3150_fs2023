import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm() {
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        username: '',
        email: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User Details:', userDetails);
    };

    return (
        <form onSubmit={handleSubmit} className="signUpForm">
            <input 
                type="text" 
                name="fullName" 
                placeholder="Full Name" 
                value={userDetails.fullName}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={userDetails.username}
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={userDetails.email}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="address" 
                placeholder="Address" 
                value={userDetails.address}
                onChange={handleChange} 
            />
            <input 
                type="tel" 
                name="phoneNumber" 
                placeholder="Phone Number" 
                value={userDetails.phoneNumber}
                onChange={handleChange} 
            />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;