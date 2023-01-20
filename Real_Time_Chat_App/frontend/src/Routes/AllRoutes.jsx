import React from "react";
import { Route, Routes } from "react-router-dom";
import SetAvatar from "../components/SetAvatar";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
      <Route path="/" element={<Chat />} />
    </Routes>
  );
};
