import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./Portfolio.css";

interface CardItem {
    title: string;
    video: string;
    description: string;
}

interface CardList {
    category: string;
    items: CardItem[];
    tooltip: string;
}

const data: CardList[] = [
    {
        category: "Website",
        items: [
            { title: "React + ASP CRUD", video: "/videos/website.mp4", description: "一个基于 React 与 ASP.NET 的增删改查示例网站" },
            { title: "Job Recruitment", video: "/videos/website.mp4", description: "招聘系统，支持职位发布和申请管理" },
            { title: "Online Shopping", video: "/videos/website.mp4", description: "电子商务平台，含购物车与支付功能" },
            { title: "Personal Website", video: "/videos/website.mp4", description: "展示个人简历与作品集的网站" },
        ],
        tooltip: "Project of website"
    },
    {
        category: "Unity",
        items: [
            { title: "DreamCho", video: "/videos/unity.mp4", description: "梦境主题的探索游戏 Demo" },
            { title: "Inventory System", video: "/videos/unity.mp4", description: "Unity 内置的背包物品管理系统" },
            { title: "可奈の不思議な冒険", video: "/videos/unity.mp4", description: "日系风格的冒险解谜游戏" },
            { title: "Chaos of Tuyuan", video: "/videos/unity.mp4", description: "幻想题材的角色扮演游戏 Demo" },
            { title: "First Demo", video: "/videos/unity.mp4", description: "第一个 Unity 项目练习 Demo" },
        ],
        tooltip: "Project of game development"
    },
    {
        category: "Video Clip",
        items: [
            { title: "AMV", video: "/videos/videoclip.mp4", description: "使用动画片段制作的音乐视频" },
        ],
        tooltip: "hobby for video clip"
    },
    {
        category: "Music",
        items: [
            { title: "Vernal Reverie", video: "/videos/music.mp4", description: "原创音乐作品，梦幻风格" },
        ],
        tooltip: "hobby for music creative"
    },
];

const Portfolio = () => {
    const [selectedCard, setSelectedCard] = useState<CardItem>(data[0].items[0]);

    return (
        <section id="portfolio" className="portfolio">
            {data.map((list) => (
                <div key={list.category} className="card-list" data-category={list.category}>
                    <div className="category-title">
                        <Tooltip position="right" infoText={list.tooltip}>
                            <p>{list.category}</p>
                        </Tooltip>
                    </div>

                    <div className="card-layout">
                        {/* 左边主要展示区 */}
                        <div className="main-card">
                            <div className="video">
                                <video src={selectedCard.video} loop muted playsInline autoPlay />
                            </div>
                            <h2>{selectedCard.title}</h2>
                            <p className="description">{selectedCard.description}</p>
                        </div>

                        {/* 右边列表 */}
                        <div className="side-list">
                            {list.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`side-card ${selectedCard.title === item.title ? "active" : ""}`}
                                    onClick={() => setSelectedCard(item)}
                                >
                                    <div className="video">
                                        <video src={item.video} loop muted playsInline />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Portfolio;
