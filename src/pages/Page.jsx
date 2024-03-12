import React from "react";
import Charts from "./Charts";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
const Page = () => {
  return (
    <div className="page-wrapper flex pt-5 justify-center">
      <Routes>
        <Route path="/" element={<Charts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Page;
