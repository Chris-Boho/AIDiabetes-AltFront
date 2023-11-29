import { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import axios from "axios";

type Message = {
    message: string;
    type: "user" | "bot";
};

function App() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [count, setCount] = useState(1);

    function onSendMessage(message: string) {
        console.log(message);
        const newMessage: Message = {
            message: message,
            type: "user",
        };
        setMessages([...messages, newMessage]);
        setCount(count + 1);
    }

    async function sendToLLM(message: Message) {
        const botResponse = await axios.post("/process-text", {
            text: message.message,
        });
        console.log(botResponse.data);
        const botMessage: Message = {
            message: botResponse.data,
            type: "bot",
        };
        setMessages([...messages, botMessage]);
    }
    function sendDefaultBotMessage() {
        const botMessage: Message = {
            message: "Hello, what is your name?",
            type: "bot",
        };
        setMessages([...messages, botMessage]);
    }

    useEffect(() => {
        sendDefaultBotMessage();
    }, []);

    useEffect(() => {
        console.log(messages);
        if (
            messages.length > 0 &&
            messages[messages.length - 1].type === "user"
        ) {
            sendToLLM(messages[messages.length - 1]);
        }
    }, [count]);

    return (
        <>
            <ChatBox messages={messages} onSendMessage={onSendMessage} />
        </>
    );
}

export default App;
