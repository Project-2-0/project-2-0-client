import React from "react";
import { Outlet } from "react-router-dom";

const ChatLayout = () => {
  return (
    <div>
      <h1>Chat Layout</h1>
      <Outlet />
    </div>
  );
}

export default ChatLayout;