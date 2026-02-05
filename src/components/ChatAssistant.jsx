import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! Soy el asistente virtual de REDPY. ¿En qué puedo ayudarte a potenciar tu Pyme hoy?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponses = [
                "¡Excelente pregunta! En REDPY nos especializamos en eso.",
                "Podemos automatizar ese proceso para ahorrarte horas de trabajo.",
                "Esa es una gran oportunidad para implementar IA en tu negocio.",
                "¿Te gustaría agendar una demo corta para verlo en acción?",
                "Nuestros agentes virtuales pueden manejar eso 24/7."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: randomResponse,
                sender: 'bot'
            }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chat-widget">
            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-avatar">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <h4>Asistente REDPY</h4>
                            <span className="status-indicator">En línea</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={toggleChat}>
                        <X size={18} />
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message bot-message typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Escribe tu consulta..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" disabled={!inputValue.trim()}>
                        <Send size={18} />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            <button className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} onClick={toggleChat}>
                <MessageCircle size={28} />
                <span className="tooltip">¡Habla con nosotros!</span>
            </button>

            <style>{`
                .chat-widget {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 1000;
                    font-family: 'Outfit', sans-serif;
                }

                .chat-toggle-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--accent));
                    color: white;
                    border: none;
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                }

                .chat-toggle-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.5);
                }

                .chat-toggle-btn.hidden {
                    transform: scale(0);
                    opacity: 0;
                    pointer-events: none;
                }

                .tooltip {
                    position: absolute;
                    right: 70px;
                    background: white;
                    color: var(--text-main);
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    opacity: 0;
                    transform: translateX(10px);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    pointer-events: none;
                }

                .chat-toggle-btn:hover .tooltip {
                    opacity: 1;
                    transform: translateX(0);
                }

                .chat-window {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    width: 350px;
                    height: 500px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transform-origin: bottom right;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform: scale(0);
                    opacity: 0;
                    pointer-events: none;
                }

                .chat-window.open {
                    transform: scale(1);
                    opacity: 1;
                    pointer-events: all;
                }

                .chat-header {
                    padding: 1rem 1.5rem;
                    background: linear-gradient(135deg, var(--primary), var(--accent));
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .chat-header-info {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }

                .chat-avatar {
                    width: 35px;
                    height: 35px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .chat-header h4 {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .status-indicator {
                    font-size: 0.75rem;
                    opacity: 0.9;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }
                
                .status-indicator::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    background: #22c55e;
                    border-radius: 50%;
                    display: block;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: white;
                    opacity: 0.7;
                    cursor: pointer;
                    display: flex;
                    transition: opacity 0.2s;
                }

                .close-btn:hover {
                    opacity: 1;
                }

                .chat-messages {
                    flex: 1;
                    padding: 1.5rem;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    background: #f8fafc;
                }

                .message {
                    max-width: 80%;
                    padding: 0.8rem 1rem;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    line-height: 1.4;
                }

                .bot-message {
                    background: white;
                    color: var(--text-main);
                    border-top-left-radius: 2px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }

                .user-message {
                    background: var(--primary);
                    color: white;
                    align-self: flex-end;
                    border-top-right-radius: 2px;
                    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
                }

                .typing-indicator span {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background: #cbd5e1;
                    border-radius: 50%;
                    margin: 0 2px;
                    animation: bounce 1s infinite;
                }

                .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
                .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                .chat-input-area {
                    padding: 1rem;
                    background: white;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    display: flex;
                    gap: 0.5rem;
                }

                .chat-input-area input {
                    flex: 1;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 0.6rem 1rem;
                    font-family: inherit;
                    font-size: 0.95rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .chat-input-area input:focus {
                    border-color: var(--primary);
                }

                .chat-input-area button {
                    background: var(--primary);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .chat-input-area button:disabled {
                    background: #cbd5e1;
                    cursor: not-allowed;
                }

                .chat-input-area button:not(:disabled):hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}
