import { HStack, VStack } from "../Stack/Stack";
import "./AboutMe.css";
import { FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiItchdotio, SiBilibili } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* ===== Header Section ===== */}
      <header className="about-header">
        <VStack className="about-card" gap={30}>
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
            A passionate developer with a strong interest in creative projects, currently focusing on React, ASP.NET Core, Unity (C#), and multimedia development. Nearly three years of self-taught programming experience, with the past year dedicated to both front-end and back-end technologies.
            <br /><br />
            Experienced in multiple projects, including a recruitment website demo, a 2D game demo, and a full-stack CRUD project built with React and ASP.NET Core Web API.
            <br /> <br />
            Eager to further improve my technical, communication, and teamwork skills in a professional environment.
          </p>
        </div>
      </header>

      {/* ===== Education ===== */}
      <section className="about-section">
        <h2>🎓 教育背景</h2>
        <div className="about-edu">
          <div className="edu-item">
            <h3>Tunku Abdul Rahman University of Management and Technology (TAR UMT)</h3>
            <p className="edu-major">Diploma in Information Technology (Software Systems Development)</p>
            <p className="edu-year">2023 – 2025</p>
            <p className="edu-desc">
              学习内容涵盖 Web 开发、数据库、操作系统、网络基础及软件开发生命周期。擅长 C#、React 与数据库管理。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section className="about-section">
        <h2>💼 技术技能</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>前端开发</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript / HTML / CSS</li>
              <li>Tailwind / Sass / Responsive Design</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>后端开发</h3>
            <ul>
              <li>ASP.NET Core / C#</li>
              <li>RESTful APIs / Entity Framework</li>
              <li>SQL Server / MySQL</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>游戏与创作</h3>
            <ul>
              <li>Unity (C#)</li>
              <li>Blender / Photoshop / Clip Studio Paint</li>
              <li>音乐制作：FL Studio / Pianoteq / Ozone</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>工具与协作</h3>
            <ul>
              <li>Git / GitHub / Vercel / VS Code</li>
              <li>Notion / Figma / Obsidian</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Interests ===== */}
      <section className="about-section">
        <h2>🎮 兴趣与创作方向</h2>
        <p>
          我的兴趣涵盖游戏设计、剧情文案、音乐创作与视觉叙事。
          我喜欢将艺术与逻辑结合，用编程语言呈现感性表达。
          当前正在尝试结合 <strong>交互叙事游戏</strong> 与 <strong>原创配乐</strong> 的个人项目。
        </p>
      </section>

      {/* ===== Personality ===== */}
      <section className="about-section">
        <h2>💬 我的理念与性格</h2>
        <p>
          - 冷静思考、追求细节与逻辑的完美平衡
          - 相信「温柔与理性并存」是创造力的源泉
          - 工作中注重结构化与文档化，热爱学习与复盘
          - 对设计、氛围、音乐都极为敏感，希望作品能打动人
        </p>
      </section>

      {/* ===== Contact ===== */}
      <section className="about-section contact">
        <h2>📫 联系方式</h2>
        <div className="contact-links">
          <a href="mailto:lohqisheng@example.com">Email</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://yourportfolio.vercel.app" target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
