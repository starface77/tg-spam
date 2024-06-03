import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./style.scss";

function Helper() {
    const [messages, setMessages] = useState([]); // Состояние для хранения сообщений чата
    const [newMessage, setNewMessage] = useState(""); // Состояние для нового сообщения
    const [socket, setSocket] = useState(null); // Состояние для сокета

    useEffect(() => {
        const socketConnection = io("http://localhost:3001"); // Подключение к серверу
        setSocket(socketConnection);

        socketConnection.on("message", (message) => {
            setMessages([...messages, message]);
        });

        return () => {
            socketConnection.disconnect();
        };
    }, [messages]);

    const handleMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== "" && socket) {
            const message = {
                id: Date.now(),
                text: newMessage,
                timestamp: new Date().toLocaleTimeString()
            };
            socket.emit("message", message);
            setNewMessage("");
        }
    };

    return (
        <div className="helper">
            <div className="helper-item">
                <div className="helper-item-title">
                    <div className="helper-item-title-icon">
                        <img src={"https://cdn-icons-png.flaticon.com/512/48/48648.png"} width={50} height={50} alt="icon" />
                    </div>
                    <div className="helper-item-title-text">
                        <p className="helper-item-title-text-title">Тех.Помощь</p>
                        <p className="helper-item-title-text-description">Чат</p>
                    </div>
                </div>
                <div className="helper-item-content">
                    <div className="chat-container">
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <div key={message.id} className="chat-message">
                                    <span className="timestamp">{message.timestamp}</span>: {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Введите сообщение..."
                                value={newMessage}
                                onChange={handleMessageChange}
                            />
                            <button onClick={handleSendMessage}>Отправить</button>
                            <button className="smailik">👌</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Helper;
