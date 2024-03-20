import { useRef } from "react";
import ChatMessage from "./ChatMessage";
import useLiveChat from "../hooks/useLiveChat";

const LiveChat = () => {
  const inputValue = useRef();
  const { chatMessages, handleChatSubmit } = useLiveChat(inputValue);

  return (
    <div className="w-full md:max-h-[40vw] relative max-h-[80vh] border rounded-2xl bg-gray-50 overflow-hidden  border-gray-300 py-3 md:mx-0 mx-2 ">
      <div className="w-full h-full">
        <h2 className="text-center text-lg border-b border-gray-300 pb-1">
          Live chat
        </h2>
        <div className="w-full md:h-[33vw] h-[60vh] overflow-y-scroll flex flex-col-reverse gap-4 px-2 pb-5 ">
          {chatMessages.map((chat, index) => {
            return (
              <ChatMessage key={index} name={chat.name} text={chat.text} />
            );
          })}
        </div>
        <form
          onSubmit={handleChatSubmit}
          className="absolute bottom-0 left-0 w-full border-t bg-white px-4 py-4"
        >
          <input
            ref={inputValue}
            type="text"
            placeholder="Chat"
            className="outline-none px-2 py-1 bg-gray-200 w-full rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
