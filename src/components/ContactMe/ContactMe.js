import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './ContactMe.css'
const ContactMe = () => {
    const [state, handleSubmit] = useForm("mknyeryb");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='contact-container'>
            <Navbar />
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                    />
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;