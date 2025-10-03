import React from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Projects from "./components/Projects.jsx";
import Layout from "./components/Layout.jsx";
import InnerBorder from "./components/InnerBorder.jsx";

function App() {
  return (
    <>
      <Layout>
          <InnerBorder>
            <Header />
            <Landing />
            <Projects />
          </InnerBorder>
      </Layout>
    </>
  );
}
export default App;
