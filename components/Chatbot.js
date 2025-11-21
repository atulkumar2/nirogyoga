'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Namaste! How can I help you with your yoga journey today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: inputValue, isBot: false }]);

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Thank you for your message. Dr. Kunal or our team will get back to you shortly. For immediate assistance, please call 8792873242.",
                isBot: true
            }]);
        }, 1000);

        setInputValue("");
    };

    return (
        <div className={styles.chatbotContainer}>
            {!isOpen && (
                <button className={styles.toggleButton} onClick={toggleChat} aria-label="Open Chat">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            )}

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <span>Healing Assistant</span>
                        <button className={styles.closeButton} onClick={toggleChat}>&times;</button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <form className={styles.inputArea} onSubmit={handleSend}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className={styles.sendButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
