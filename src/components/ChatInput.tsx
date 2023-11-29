import React, { useState } from "react";

type ChatInputProps = {
    onSendMessage: (message: string) => void;
};

export default function ChatInput({ onSendMessage }: ChatInputProps) {
    const [message, setMessages] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSendMessage(message);
        setMessages("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-4 justify-center">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessages(e.target.value)}
                    placeholder="Enter message"
                    className="input input-bordered input-primary w-full max-w-xs text-black bg-white"
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}
