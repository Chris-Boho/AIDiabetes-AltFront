type Props = {
    messages: string[];
};

export default function ChatList({ messages }: Props) {
    return (
        <div className="flex-shrink-0 gap-2 border border-red-500">
            {messages.map((message, index) => (
                <div key={index} className="flex justify-end border border-blue-500">
                    {message}
                </div>
            ))}
        </div>
    );
}
