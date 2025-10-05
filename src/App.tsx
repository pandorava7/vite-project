import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";

const App: React.FC = () => {

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
                <section id="about">…</section>
                <section id="resume">…</section>
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
