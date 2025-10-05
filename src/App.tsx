import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import { useEffect } from "react";

const App: React.FC = () => {

  // useEffect(() => {
  //   // 页面加载完毕后检查 URL 的 hash
  //   if (window.location.hash) {
  //     const id = window.location.hash.replace("#", "");
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);

    useEffect(() => {
    // 仅第一次进入网站时执行
    if (!window.location.hash) {
      window.location.hash = "#portfolio";
    }
  }, []);

  return (
    <div className="app">
      {/* NavBar */}
      <Navbar />

      {/* 内容区域 */}
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <section id="about">
                  <AboutMe />
                </section>
                <section id="resume">
                  <Resume />
                </section>
                <section id="other">…</section>
              </>
            } />

            <Route path="portfolio/:id" element={<PortfolioDetail />} />
        </Routes>

      </main>
    </div>
  );
};

export default App;
