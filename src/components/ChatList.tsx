import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
};

export default function ChatList({ children }: Props) {
    const outerDiv = useRef<HTMLDivElement | null>(null);
    const innerDiv = useRef<HTMLDivElement | null>(null);
    const prevInnerDivHeight = useRef(null);

    const [showMessages, setShowMessages] = useState(false);

    useEffect(() => {
        const outerDivHeight = outerDiv.current?.clientHeight;
        const innerDivHeight = innerDiv.current?.clientHeight;
        const outerDivScrollTop = outerDiv.current?.scrollTop;

        if (
            !prevInnerDivHeight.current ||
            outerDivScrollTop === prevInnerDivHeight.current - outerDivHeight!
        ) {
            outerDiv.current?.scrollTo({
                top: innerDivHeight! - outerDivHeight!,
                left: 0,
                behavior: prevInnerDivHeight.current ? "auto" : "smooth",
            });
            // console.log("show messages:", showMessages);
            setShowMessages(true);
        }
    }, [children]);

    return (
        <div className="relative h-full">
            <div
                className="relative h-full overflow-y-scroll scrollbar mr-2"
                ref={outerDiv}
            >
                <div
                    className="relative transition-all duration-300"
                    style={{ opacity: showMessages ? 1 : 0 }}
                    ref={innerDiv}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
