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

  // useEffect(() => {
  //   // 仅第一次进入网站时执行
  //   if (!window.location.hash) {
  //     window.location.hash = "#portfolio";
  //   }
  // }, []);

  // 在 React 组件挂载后执行（例如在 App.jsx 或 useEffect 中）
useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60; // 导航栏高度
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "auto" }); // 不需要平滑滚动
    }
  }
}, []);

  return (
    <div className="app">
      {/* NavBar */}
      <Navbar />


      <h1 style={{marginTop:"100px"}}>This website is developed using React</h1>

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
              </>
            } />

          <Route path="portfolio/:id" element={<PortfolioDetail />} />
        </Routes>

      </main>
    </div>
  );
};

export default App;
