// frontend/src/components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const URL = 'http://localhost:6000/api/chat';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URL, { message });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error communicating with the backend:', error);
        }
    };

    return (
        <div id="chatbot-container">
            <h1>Medical Chatbot</h1>
            <form id="chatbot-form" onSubmit={handleSubmit}>
                <label htmlFor="user_input">Ask a medical question:</label>
                <input
                    type="text"
                    id="user_input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Ask</button>
            </form>
            {response && (
                <div id="chatbot-response">
                    <p><strong>You:</strong> {message}</p>
                    <p><strong>Chatbot:</strong> {response}</p>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
