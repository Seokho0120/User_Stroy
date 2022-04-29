import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserStory from "./UserStory";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UserStory" element={<UserStory />} />
      </Routes>
    </BrowserRouter>
  );
}
