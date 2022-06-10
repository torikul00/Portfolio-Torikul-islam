import { useForm, ValidationError } from '@formspree/react';
import { BiSend } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import './ContactMe.css'
const ContactMe = () => {
    const [state, handleSubmit] = useForm("mknyeryb");
    const navigate = useNavigate()

    if (state.succeeded) {
        return <div className='contact-container'>
            <Navbar />
           
            <h1 className='thanks-message'>Thanks for texting me ! </h1>
            <h3 className='thanks-message'>I will reply to your message as soon as possible </h3>
            <button onClick={()=>navigate('/')} className='back-button'>Back to Home</button>
        </div>
    }

    return (
        <div className='contact-container'>
            <Navbar />
            <div>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h1 className='form-title'>GET IN TOUCH</h1>
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
                    <label htmlFor="message">Message</label>
                    <textarea

                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className='sent-button' type="submit" disabled={state.submitting}>
                        Send <BiSend className='send-icon' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;