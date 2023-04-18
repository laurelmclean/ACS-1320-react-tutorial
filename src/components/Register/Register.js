import React from 'react';
import './Register.css';

function Register() {
    return (
        <article className='Register'>
            <h1 className='Register-title'>Register</h1>
            <p className='Register-desc'>
                Sign up today to receive updates about SFPOPOS announcements, new spaces, and more!
            </p>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className='Checkbox-text'>
                    <input type="checkbox" aria-label="Marketing consent" />
                    <p>By signing up you agree to receive personalized marketing material from SFPOPOS in accordance with our privacy policy.</p>
                </div>
                <button type="submit" aria-label="Submit registration">Register</button>
            </form>
        </article>
    )
}

export default Register;
