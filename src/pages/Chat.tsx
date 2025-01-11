import React from "react";
import { useEffect, useState } from "react";
import { Router, useLoaderData, useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  let { id } = useParams();
  const chatLoader = useLoaderData();

  return(
    <h1>Chat: {chatLoader.name}</h1>
    )
}

export default Chat;

export const chatDetailLoader = async ({params}) => {
  const {id} = params;
  const response = await fetch(API_URL + "/chats/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  });
  return response.json();
}