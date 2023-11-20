import ChatInput from "./ChatInput";
import ChatList from "./ChatList";

type ChatBoxProps = {
    messages: string[];
    onSendMessage: (message: string) => void;
};

export default function ChatBox({ messages, onSendMessage }: ChatBoxProps) {
    return (
        <div className="flex items-center justify-center mt-8">
            <div className="flex flex-col items-center border rounded-lg border-blue-700 p-4 h-96">
                <h1>ChatBox</h1>
                <div className="divider"></div>
                <ChatList messages={messages} />
                <div className="flex-grow"></div>
                <ChatInput onSendMessage={onSendMessage} />
            </div>
        </div>
    );
}