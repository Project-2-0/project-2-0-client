import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.tsx";
import React from "react";
import Chat from "./pages/Chat.tsx";

const App = () => {
  return (
    <div>
      <Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Route>
    </div>
  );
}

export default App;