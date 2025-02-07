import { useState, useEffect, useRef } from "react";

function UseWebSocket(url, shouldReconnect = true) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const reconnectRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
      if (shouldReconnect) {
        clearTimeout(reconnectRef.current);
        reconnectRef.current = setTimeout(() => {
          setSocket(new WebSocket(url));
        }, 3000);
      }
    };

    return () => {
      ws.close();
      clearTimeout(reconnectRef.current);
    };
  }, [url, shouldReconnect]);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.warn("WebSocket is not connected.");
    }
  };

  return { messages, sendMessage, isConnected };
}

export default UseWebSocket;
