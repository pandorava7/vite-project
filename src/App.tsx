import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";

const App: React.FC = () => {


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
