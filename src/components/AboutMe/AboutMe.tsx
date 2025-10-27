import { useEffect } from "react";
import { HStack, VStack } from "../Stack/Stack";
import "./AboutMe.css";
import { FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiItchdotio, SiBilibili } from "react-icons/si";
import CGPABubble from "../CGPABubble/CGPABubble";
import SkillRadarChart from "../Radar/SkillRadarChart";

const AboutMe = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3, // 当 30% 内容进入视窗时触发
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="about-container">
      {/* ===== Header Section ===== */}
      <header className="about-header">
        <VStack className="about-card" gap={20}>
          <img
            className="about-avatar"
            src="/profile/profile.jpg"
            alt="Profile portrait"
          />

          {/* 联系方式图标 */}
          <HStack className="contact-icons" aria-label="Contact links" justify="center" gap={30}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pandora.va7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon email"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/pandorava7"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://pandora-vanity.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon itch"
              title="Itch.io"
            >
              <SiItchdotio />
            </a>
          </HStack>

          <HStack className="contact-icons" aria-label="Contact links" justify="center" gap={30}>


            <a
              href="https://www.youtube.com/@Sylunae-7"
              target="_blank"
              rel="noopener noreferrer"
              className="icon youtube"
              title="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://space.bilibili.com/1754165806?spm_id_from=333.1007.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="icon bilibili"
              title="Bilibili"
            >
              <SiBilibili />
            </a>
          </HStack>

        </VStack>


        <div className="about-intro">
          <h1 className="about-name">Loh Qi Sheng</h1>
          <h2 className="about-role">Front-End & Back-End & Game Developer</h2>
          <p className="about-summary">
            Passionate developer focusing on React, ASP.NET Core, and Unity (C#), with nearly three years of self-taught experience.
            <br /><br />
            Skilled at leveraging AI tools to improve coding and learning efficiency.
            Experienced in developing creative projects including a recruitment website, a 2D game, and a full-stack CRUD app.
            <br /><br />
            Eager to refine technical, communication, and teamwork skills in a professional environment.
          </p>
        </div>
      </header>

      <SkillRadarChart />

      {/* ===== Education ===== */}
      <section className="about-section">
        <h2>🎓 Education Background</h2>
        <div className="about-edu">
          <div className="edu-item">
            <HStack justify="between">
              <VStack>
                <h3><a href="https://tarc.edu.my/" target="_blank" className="black">Tunku Abdul Rahman University of Management and Technology (TAR UMT)</a></h3>
                <p className="edu-major">
                  <a href="https://focs.tarc.edu.my/programmes/diploma/diploma-in-information-technology-dft" target="_blank" className="black">
                    Diploma in Information Technology
                  </a>
                </p>
                <p className="edu-year">2024/7 - 2026/7</p>
              </VStack>

              <CGPABubble value={3.4} max={4.0} size={140} />
            </HStack>


            <p className="edu-desc">
              Learning areas include <strong>web development, databases, operating systems, networking fundamentals</strong>,
              and the <strong>software development lifecycle</strong>. Proficient in <strong>C#, React, and ASP.NET Core</strong>.
            </p>

            <div className="edu-courses">
              <h4>Technical Core 💻</h4>
              <ul>
                <li>Software Development Fundamentals <span className="gray">Rating Unknown</span></li>
                <li>Object-Oriented Programming Techniques <span className="red">A</span></li>
                <li>Web-Based Integrated Systems <span className="red">A</span></li>
                <li>Web and Mobile Systems <span className="gray">Rating Unknown</span></li>
                <li>Operating Systems <span className="gray">Rating Unknown</span></li>
                <li>Database Development and Applications <span className="orange">B+</span></li>
              </ul>
            </div>
            <div className="edu-courses">
              <h4>Systems & Networking 🌐</h4>
              <ul>
                <li>Fundamentals of Computer Networks <span className="red">A</span></li>
                <li>Networking Essentials <span className="gray">Rating Unknown</span></li>
                <li>Computer Architecture <span className="orange">B</span></li>
              </ul>
            </div>
            <div className="edu-courses">
              <h4>Analytical & Problem Solving 🧩</h4>
              <ul>
                <li>Problem Solving and Programming <span className="red">A</span></li>
                <li>Discrete Mathematics <span className="red">A</span></li>
                <li>Calculus and Algebra <span className="blue">C</span></li>
                <li>Probability and Statistics <span className="orange">B+</span></li>
              </ul>
            </div>
            <div className="edu-courses">
              <h4>Security & Ethics 🔐</h4>
              <ul>
                <li>Introduction to Cybersecurity <span className="blue">B-</span></li>
                <li>Ethics in Computing <span className="gray">Rating Unknown</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Skills ===== */}
      <section className="about-section">
        <h2>Skills</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>Front-End</h3>
            <ul>
              <li>React⭐</li>
              <li>TypeScript / JavaScript⭐</li>
              <li>HTML5⭐</li>
              <li>CSS3⭐</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Back-End</h3>
            <ul>
              <li>ASP.NET Core / C#⭐</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Database</h3>
            <ul>
              <li>SQL Server</li>
              <li>Entity Framewor⭐</li>
              <li>MySQL</li>
              <li>PhpMyAdmin</li>
              <li>Dbeaver</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Game Develop</h3>
            <ul>
              <li>Unity / C#⭐</li>
              <li>Music: FL Studio</li>
              <li>Pixel Art: Aseprite⭐</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Tools & Creative</h3>
            <ul>
              <li>Github / Vercel</li>
              <li>VS Code / VS 2022 / IntelliJ</li>
              <li>Figma</li>
              <li>Obsidian</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Interests ===== */}
      <section className="about-section">
        <h2>Interests and Direction</h2>
        <p>
          My interests are broad and mostly connected to <strong>creative expression</strong>, such as game design, storytelling, music composition, and visual narrative. Games, being a fusion of all these art forms, inspired me to pursue game development—a challenging yet deeply fulfilling path.
          <br /><br />
          Over time, as I learned programming, I realized that I genuinely enjoy it as well, since coding allows me to <strong>turn ideas into reality without limitations</strong>.
          <br /><br />
          Moving forward, I aim to keep improving my programming skills and technical stack, particularly in front-end and back-end development, to build a strong foundation for achieving my long-term dream.
        </p>
      </section>

      {/* ===== Personality ===== */}
      <section className="about-section">
        <h2>Philosophy and Character</h2>
        <p>
          I enjoy taking on <strong>challenging tasks</strong>. When facing difficulties, I tend to <strong>review the overall logic</strong>, identify areas for <strong>improvement</strong>, and, when necessary, <strong>redesign parts of the structure</strong> to enhance quality. I pay close attention to <strong>detail</strong> and often dedicate significant effort to refining small features, pursuing perfection as long as it does not hinder progress.
          <br /><br />
          When dealing with <strong>large or complex projects</strong>, I usually use <strong>mind maps</strong> to break them down into smaller, manageable modules and complete them step by step. In <strong>team collaborations</strong>, I often take on a <strong>technical support role</strong>, focusing on helping others solve problems rather than leading the group.
          <br /><br />
          I believe the future belongs to those who <strong>continue to learn</strong> and <strong>empathize with others</strong>.
        </p>

      </section>

      {/* ===== Contact ===== */}
      <section className="about-section contact">
        <h2>Contact</h2>
        <div className="contact-links">

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pandora.va7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >Email</a>

          <a href="https://github.com/pandorava7"
              target="_blank"
              rel="noopener noreferrer">
            GitHub
          </a>

          <a href="https://pandora-vanity.itch.io/"
              target="_blank"
              rel="noopener noreferrer">
            Icth.io
          </a>

          <a href="https://www.youtube.com/@Sylunae-7"
              target="_blank"
              rel="noopener noreferrer">
            Youtube
          </a>

          <a href="https://space.bilibili.com/1754165806?spm_id_from=333.1007.0.0"
              target="_blank"
              rel="noopener noreferrer">
            Bilibili
          </a>

        </div>
      </section>
    </div>
  );
};

export default AboutMe;
