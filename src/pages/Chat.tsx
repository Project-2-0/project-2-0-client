import React from "react";
import { useEffect, useState } from "react";
import { Router, useParams } from "react-router-dom";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  let { id } = useParams();

  return(
    <h1>Chat: {id}</h1>
    )
}

export default Chat;