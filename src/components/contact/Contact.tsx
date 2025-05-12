'use client'

import React, { useState, FormEvent, useRef } from 'react';
import '../contact/Contact.css'

export default function Contact(){
    const [result, setResult] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("SENDING...");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "6aa36440-ef13-40b4-8c6d-b247ad5a79f0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error!", data);
            setResult(data.message);
        }

        setTimeout(() => setResult(""), 2000);
    };

    const handleCustomSubmit = () => {
        formRef.current?.requestSubmit();
    };

    return (
        <div className='contact' id='contact'>
            <h1 className='contact-text'>CONTACT</h1>
            <form ref={formRef} onSubmit={onSubmit} className="contact-form">
                <h2>Get in touch!</h2>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required placeholder="(xx) xxxxx-xxxx" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@example.com" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Type your message..." />

                <div className="brick one"></div>

                <div className="tooltip-mario-container" onClick={handleCustomSubmit}>
                    <div className="box"></div>
                    <div className="mush"></div>
                </div>

                <div className="brick two"></div>

                <p className="form-result">{result}</p>
            </form>

        </div>
    );
}

