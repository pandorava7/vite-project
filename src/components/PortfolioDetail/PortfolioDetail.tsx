import { useParams } from "react-router-dom";
import data from "../../data/portfolio.json";
import detailData from "../../data/portfolio_info.json";
import "./PortfolioDetail.css";

const PortfolioDetail = () => {
    const { id } = useParams();

    // 找出基础数据（标题、封面、视频等）
    const projectBase = data.flatMap((p) => p.items).find((i) => i.id === id);
    // 找出详细数据（区块）
    const projectDetail = detailData.find((p) => p.id === id);

    // 合并两个来源
    const projectFull = { ...projectBase, ...projectDetail };

    if (!projectFull) return <p>项目不存在或数据未加载。</p>;

    const sectionTitleMap: Record<string, string> = {
        overview: "背景介绍",
        tech: "技术栈",
        contribution: "我的贡献",
        challenges: "技术难题",
    };

    const renderBlock = (block: any, idx: number) => {
        switch (block.type) {
            case "paragraph":
                return <p key={idx} className="pd-paragraph">{block.content}</p>;

            case "image":
                return (
                    <figure key={idx} className="pd-image">
                        <img src={block.src} alt={block.caption || "image"} />
                        {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                );

            case "video":
                return (
                    <div key={idx} className="pd-video">
                        <video src={block.src} controls></video>
                    </div>
                );

            case "list":
                return (
                    <ul key={idx} className="pd-list">
                        {block.items.map((item: string, j: number) => (
                            <li key={j} className="pd-item select-none">{item}</li>
                        ))}
                    </ul>
                );

            case "mediaSplit":
                return (
                    <div
                        key={idx}
                        className={`pd-media-split ${block.side === "right" ? "right" : "left"}`}
                    >
                        <div className="pd-media">
                            <img src={block.image} alt={block.caption || ""} />
                            {block.caption && <figcaption>{block.caption}</figcaption>}
                        </div>
                        <div className="pd-text">
                            <p>{block.content}</p>
                        </div>
                    </div>
                );

            case "quote":
                return (
                    <blockquote key={idx} className="pd-quote">
                        {block.content}
                    </blockquote>
                );

            default:
                return null;
        }
    };

    const sections = ["overview", "tech", "contribution", "challenges"];

    return (
        <div className="portfolio-detail">
            <header className="pd-header">
                <h1>{projectFull.title}</h1>
                {projectFull.description && <p className="pd-desc">{projectFull.description}</p>}
                {/* {projectFull.png && (
          <img className="pd-cover" src={projectFull.png} alt={projectFull.title} />
        )} */}
                {projectFull.video && projectFull.video.length > 0 && (
                    <video
                        className="pd-top-video"
                        src={projectFull.video[0]}
                        controls
                        loop
                        muted
                    />
                )}
                {projectFull.link && <p className="pd-link">Link: <a href={projectFull.link} target="_blank">{projectFull.link}</a></p>}
            </header>

            {sections.map((sec) => {
                const blocks = projectFull.blocks?.filter((b) => b.section === sec);
                if (!blocks || blocks.length === 0) return null;
                return (
                    <section key={sec} id={sec} className="pd-section">
                        <h2>{sectionTitleMap[sec]}</h2>
                        <div className="pd-section-content">
                            {blocks.map((block, i) => renderBlock(block, i))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default PortfolioDetail;
