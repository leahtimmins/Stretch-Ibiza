'use client';

import { useState } from 'react';

const Newsletter = ({ className, bgColor }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Loading...');

        try {
            const res = await fetch('/api/mailchimp/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('Subscribed successfully!');
                alert("Subscribed successfully");
                setEmail('');
                setFirstName('');
                setLastName('');

            } else {
                setStatus(data.error || 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            setStatus('An error occurred while submitting the form.');
        }
    };

    return (
        <div className={`mb-2 w-full max-w-[320px] mx-auto ${className ? className : ""}`}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only block text-sm font-medium font-glacialRegular leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        aria-describedby="email-description"
                        className={`block font-glacialRegular w-full rounded-md border-0 py-1.5  placeholder:text-black  sm:text-sm sm:leading-6 ${bgColor ? bgColor : "bg-mustard-yellow"} border-0`}
                    />
                </div>
            </form>
        </div>
    )
}

export default Newsletter;