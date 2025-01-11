import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Main from "./pages/Main.tsx";
import React from "react";
import Chat, { chatDetailLoader } from "./pages/Chat.tsx";
import NotFound from "./pages/NotFound.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import ChatLayout from "./layouts/ChatLayout.tsx";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="chat" element={<ChatLayout />} >
          <Route index element={<NotFound />} />
          <Route path=":id" element={<Chat />} loader={chatDetailLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;