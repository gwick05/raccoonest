import { useState } from "react";
import Message from "./Message";

export default function Blackboard() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("  ");

  function handleSubmit(e) {
    if (e.code !== "Enter") return;
    setMessages((messages) => [
      { message: e.target.value, id: Date.now() },
      ...messages,
    ]);
    setMessage("");
  }

  return (
    <div className="blackboard">
      <div className="board center">
        <ul>
          {messages.slice(0, 9).map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
      </div>
      <div className="text-message center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleSubmit}
        />
      </div>
    </div>
  );
}
