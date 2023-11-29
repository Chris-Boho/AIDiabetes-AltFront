import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatMessage from "./ChatMessage";

type ChatBoxProps = {
    messages: { message: string; type: string }[];
    onSendMessage: (message: string) => void;
};

export default function ChatBox({ messages, onSendMessage }: ChatBoxProps) {
    return (
        <div className="h-screen w-full bg-gray-300 p-5">
            <div className="flex flex-col h-full justify-center items-center">
                <div className="bg-gray-100 border-2 border-slate-500 rounded-lg p-5 shadow-2xl w-[32rem]">
                    <h1 className="text-center text-black mb-2">
                        Diagnosis Chat Box
                    </h1>
                    <div className="divider divider-primary"></div>
                    <div className="h-96 rounded-lg">
                        <ChatList>
                            {messages.map(
                                (message, index) =>
                                    message && (
                                        <ChatMessage
                                            key={index}
                                            message={message.message}
                                            type={message.type}
                                        />
                                    )
                            )}
                        </ChatList>
                    </div>
                    <div className="mt-4">
                        <ChatInput onSendMessage={onSendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
}
