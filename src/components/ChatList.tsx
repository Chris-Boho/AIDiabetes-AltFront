type Props = {
    messages: string[];
};

export default function ChatList({ messages }: Props) {
    return (
        <div className="flex flex-col gap-2">
            {messages.map((message, index) => (
                <div key={index} className="text-rght">
                    {message}
                </div>
            ))}
        </div>
    );
}
