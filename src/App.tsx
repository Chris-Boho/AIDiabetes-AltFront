import { useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
    const [messages, setMessages] = useState<string[]>([]);

    const onSendMessage = (message: string) => {
        console.log(message);
        setMessages([...messages, message]);
    };
    return (
        <>
            <ChatBox messages={messages} onSendMessage={onSendMessage} />
        </>
    );
}

export default App;
