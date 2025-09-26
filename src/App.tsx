import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

const App: React.FC = () => {

  return (
    <div className="app">
      {/* NavBar */}
      <Navbar />

      {/* 内容区域 */}
      <main className="main">
        <section id="portfolio">
          <Portfolio/>
        </section>
        <section id="about">…</section>
        <section id="resume">…</section>
        <section id="other">…</section>
      </main>
    </div>
  );
};

export default App;
