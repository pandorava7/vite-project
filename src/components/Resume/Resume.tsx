import "./Resume.css";

const Resume = () => {
  // 手动列出 public/resumes 下的文件名
  // （构建后 public 下的路径会直接暴露）
  const resumeFiles = [
    {
      name: "Resume (English).pdf",
      path: "/resumes/Resume_English.pdf",
    }
  ];

  return (
    <div className="resume-container">
      <h1 className="black">My Resume</h1>
      <p className="resume-intro">
        Here are different versions of my resume
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
                View
              </a>
              <a
                href={file.path}
                download
                className="btn download"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
