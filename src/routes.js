import React from "react";
import App from  './App'
import MainMint from "./Mint-Ens/MainMint";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Mint" element={<MainMint/>}/>
          <Route
            path="/other"
            element={
              <>
                <h1>Hello other routes</h1>
              </>
            }
          />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRouter ; 