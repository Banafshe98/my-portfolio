import React from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Projects from "./components/Skills.jsx";
import Layout from "./components/Layout.jsx";
import InnerBorder from "./components/InnerBorder.jsx";
import Skills from "./components/Skills.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactMe from "./pages/ContactMe.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <InnerBorder>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/ContactMe" element={<ContactMe />} />
              <Route />
            </Routes>
          </InnerBorder>
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
