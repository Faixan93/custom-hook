import React, { useState } from "react";
import useWebSocket from "./UseWebSocket";

const WebSocket = () => {
  const { messages, sendMessage, isConnected } = useWebSocket(
    "wss://example.com/socket"
  );
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>WebSocket</h1>
      <h2>
        WebSocket Connection: {isConnected ? "🟢 Connected" : "🔴 Disconnected"}
      </h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocket;
