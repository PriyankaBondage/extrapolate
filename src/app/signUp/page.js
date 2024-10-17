"use client"
import React, { useState } from 'react';
import restro from '../Styles/RestaurantSignUp.module.css'; // Import the CSS file for styling
import Link from 'next/link';

function RestaurantSignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!name || !email || !password) {
            setError('Please fill in all fields.');
        } else {
            setError('');
            // Handle signup logic here
            console.log('Signing up with', { name, email, password });
        }
    };

    return (
        <div className={restro.signupcontainer}>
            <h3 className={restro.signuptitle}>Restaurant Sign Up</h3>
            {error && <p className={restro.errormessage}>{error}</p>}
            <form className={restro.signupform} onSubmit={handleSubmit}>
                <div className={restro.inputgroup}>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={restro.inputgroup}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={restro.inputgroup}>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={`${restro.buttongroup}`}>
                    <Link href='/'>
                    
    <button className={restro.signup} type="submit">Sign Up</button>
                    </Link>
    <Link href="/">
        <button className={restro.back} type="button">Back</button>
    </Link>
</div>



                <div >
                
                </div>
            </form>
        </div>
    );
}

export default RestaurantSignUp;
