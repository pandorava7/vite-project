import "./Resume.css";

const Resume = () => {
  // 手动列出 public/resumes 下的文件名
  // （构建后 public 下的路径会直接暴露）
  const resumeFiles = [
    {
      name: "Resume (English).pdf",
      path: "/resumes/Resume_English.pdf",
    },
    {
      name: "履历表（中文）.pdf",
      path: "/resumes/Resume_Chinese.pdf",
    },
    {
      name: "Game Developer Resume.pdf",
      path: "/resumes/GameDev_Resume.pdf",
    },
  ];

  return (
    <div className="resume-container">
      <h1>📄 My Resume</h1>
      <p className="resume-intro">
        以下是我不同版本的简历，可直接在线预览或下载。  
        （所有文件均储存在 <code>/public/resumes/</code> 文件夹中）
      </p>

      <div className="resume-list">
        {resumeFiles.map((file, index) => (
          <div className="resume-item" key={index}>
            <div className="resume-info">
              <h3>{file.name}</h3>
            </div>
            <div className="resume-actions">
              <a
                href={file.path}
                target="_blank"
                rel="noreferrer"
                className="btn view"
              >
                查看
              </a>
              <a
                href={file.path}
                download
                className="btn download"
              >
                下载
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
