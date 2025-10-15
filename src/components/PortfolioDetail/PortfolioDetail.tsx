import { useParams } from "react-router-dom";
import data from "../../data/portfolio.json";
import detailData from "../../data/portfolio_info.json";
import "./PortfolioDetail.css";
import VideoCarousel from "../VideoCarousel/VideoCarousel";

const PortfolioDetail = () => {
    const { id } = useParams();

    // 找出基础数据（标题、封面、视频等）
    const projectBase = data.flatMap((p) => p.items).find((i) => i.id === id);
    // 找出详细数据（区块）
    const projectDetail = detailData.find((p) => p.id === id);

    // 合并两个来源
    const projectFull: {
        id?: string;
        title?: string;
        video?: string[];
        png?: string;
        description?: string;
        links?: string[];
        blocks?: any[];
    } = { ...projectBase, ...projectDetail };

    if (!projectFull) return <p>项目不存在或数据未加载。</p>;

    const sectionTitleMap: Record<string, string> = {
        overview: "Background Introduction",
        tech: "Tech",
        contribution: "Contribution",
        challenges: "Challenges",
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

            case "mediaSplit": {
                // 从 JSON 读取比例字段，如 "2-1" 或 "1-2"
                const [col1, col2] = (block.ratio || "1-2").split("-").map(Number);

                // 根据左右决定谁先显示
                const isRight = block.side === "right";

                // inline style 动态控制 grid
                const gridStyle = {
                    display: "grid",
                    gridTemplateColumns: isRight ? `${col2}fr ${col1}fr` : `${col1}fr ${col2}fr`,
                    gap: "24px",
                };

                return (
                    <div key={idx} className={`pd-media-split ${isRight ? "right" : "left"}`} style={gridStyle}>
                        <div className="pd-media">
                            <img src={block.image} alt={block.caption || ""} />
                            {block.caption && <figcaption>{block.caption}</figcaption>}
                        </div>
                        <div className="pd-text">
                            <p>{block.content}</p>
                        </div>
                    </div>
                );
            }

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

                    <div className="video">
                        <VideoCarousel
                            videoList={projectFull.video || []}
                            controls={true}
                        />
                    </div>
                )}

                {projectFull.links && projectFull.links.length > 0 && (
                    projectFull.links.map((src, idx) => (
                        <p key={idx} className="pd-link">
                            Link: <a href={src} target="_blank" rel="noopener noreferrer">{src}</a>
                        </p>
                    ))
                )}
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
