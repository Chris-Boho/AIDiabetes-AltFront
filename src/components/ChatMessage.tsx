type Props = {
    message: string;
    type: string;
};

export default function ChatMessage({ message, type }: Props) {
    if (type === "bot") {
        return (
            <div className="chat chat-start">
                <div className="chat-header font-bold text-black ml-2">Bot</div>
                <div className="chat-bubble chat-bubble-success break-words font-semibold">
                    {message}
                </div>
            </div>
        );
    }
    return (
        <div className="chat chat-end">
            <div className="chat-header font-bold text-black mr-2">User</div>
            <div className="chat-bubble chat-bubble-info break-words font-semibold">
                {message}
            </div>
        </div>
    );
}
