import React, { useState, useEffect } from 'react';
import '../styles/style.css'; // Ensure your CSS path is correct

const ContactForm = () => {
    const [captchaCode, setCaptchaCode] = useState('');
    const [userCaptchaInput, setUserCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState(false);

    // Function to generate CAPTCHA
    const generateCaptcha = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let newCaptcha = '';
        for (let i = 0; i < 5; i++) {
            newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaCode(newCaptcha);
    };

    // Generate CAPTCHA on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Trim and convert user input to uppercase for comparison
        const userInput = userCaptchaInput.trim().toUpperCase();

        if (userInput !== captchaCode) {
            setCaptchaError(true); // Show CAPTCHA error
            generateCaptcha(); // Regenerate CAPTCHA
        } else {
            setCaptchaError(false); // Hide CAPTCHA error
            alert('Form submitted successfully!'); // Success message
            e.target.reset();
            setUserCaptchaInput('');
            generateCaptcha(); // Regenerate CAPTCHA for the next submission
        }
    };

    return (
        <div className="container">
            <form id="contactForm" onSubmit={handleSubmit}>
                <h2>Contact Form</h2>

                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    placeholder="Enter your first name"
                    required
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="last_name"
                    placeholder="Enter your last name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="contact-number">Contact Number</label>
                <input
                    type="tel"
                    id="contact-number"
                    name="contact_number"
                    placeholder="Enter your contact number"
                    required
                />

                <label htmlFor="captcha">Enter CAPTCHA:</label>
                <div id="captchaContainer">
                    <span id="captchaText">{captchaCode}</span>
                    <button type="button" onClick={generateCaptcha}>
                        🔄
                    </button>
                </div>

                <input
                    type="text"
                    id="captchaInput"
                    placeholder="Enter the text above"
                    value={userCaptchaInput}
                    onChange={(e) => setUserCaptchaInput(e.target.value)}
                    required
                />

                <button type="submit" id="submitBtn">Submit</button>

                {captchaError && (
                    <p id="captchaError">Incorrect CAPTCHA. Try again.</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
