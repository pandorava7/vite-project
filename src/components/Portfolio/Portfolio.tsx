import { useEffect, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./Portfolio.css";
import data from '../../data/portfolio.json'
import { useNavigate } from "react-router-dom";


interface CardItem {
    id: string;
    title: string;
    video?: string[];
    png?: string;
    description?: string;
}

const Portfolio = () => {
    // 每个 category 默认选中第一个 item
    const initialSelected: Record<string, CardItem> = {};
    data.forEach((list) => {
        initialSelected[list.category] = list.items[0];
    });

    const [selectedCards, setSelectedCards] = useState<Record<string, CardItem>>(initialSelected);

    const handleSelect = (category: string, item: CardItem) => {
        setSelectedCards((prev) => ({
            ...prev,
            [category]: item,
        }));
    };

    const [videoIndex, setVideoIndex] = useState(0);

    // 控制展开/折叠
    const initialExpanded: Record<string, boolean> = {};
    data.forEach((list) => {
        initialExpanded[list.category] = list.category === "Website for Fullstack"; // 默认只有 Website 展开
    });
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(initialExpanded);

    // 可见状态（真正挂载/卸载用）
    const [visibleCategories, setVisibleCategories] = useState<Record<string, boolean>>(initialExpanded);

    const toggleCategory = (category: string) => {
        if (expandedCategories[category]) {
            // 正在展开 → 要折叠
            setExpandedCategories((prev) => ({ ...prev, [category]: false }));
            setTimeout(() => {
                setVisibleCategories((prev) => ({ ...prev, [category]: false }));
            }, 200); // 0.2 秒后再卸载
        } else {
            // 正在折叠 → 要展开
            setVisibleCategories((prev) => ({ ...prev, [category]: true }));
            setTimeout(() => {
                setExpandedCategories((prev) => ({ ...prev, [category]: true }));
            }, 10); // 微小延迟，保证动画能触发
        }
    };

    const navigate = useNavigate();

    const portfolioInfo = (id: string) => {
        navigate(`portfolio/${id}`)

        // console.log("test");
    };



    return (
        <section id="portfolio" className="portfolio">
            {data.map((list) => {
                const currentCard = selectedCards[list.category];
                const isExpanded = expandedCategories[list.category];
                const isVisible = visibleCategories[list.category];

                // 监听展开变化
                useEffect(() => {
                    if (isExpanded) {
                        const el = document.getElementById(`card-${list.category}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, [isExpanded, list.category]);  // 依赖 isExpanded 和 category

                return (
                    <div
                        key={list.category}
                        id={`card-${list.category}`}   // 用 category 做唯一 id
                        className={`card-list ${isExpanded ? "expanded" : "collapsed"}`}
                        data-category={list.category}
                    >
                        <div
                            className="category-title"
                            onClick={() => {
                                toggleCategory(list.category);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <Tooltip position="right" infoText={list.tooltip}>
                                <p>{list.category}</p>
                            </Tooltip>
                        </div>

                        {
                            !isExpanded && (
                                <div className="collapse-message">
                                    <p>↑ Only click if you are interested</p>
                                </div>
                            )
                        }

                        {
                            isVisible && (
                                <div className="card-layout">
                                    {/* 左边主要展示区 */}
                                    <div className="main-card">
                                        <div className="video">
                                            {/* 左按钮 */}
                                            {currentCard.video && currentCard.video.length > 1 && (
                                                <button
                                                    className="video-nav left"
                                                    onClick={() =>
                                                        setVideoIndex((prev) =>
                                                            prev > 0 ? prev - 1 : currentCard.video!.length - 1
                                                        )
                                                    }
                                                >
                                                    ⇦
                                                </button>
                                            )}

                                            {/* 视频滑动区 */}
                                            <div
                                                className="video-track"
                                                style={{ transform: `translateX(-${videoIndex * 100}%)` }}
                                            >
                                                {currentCard.video?.map((src, idx) => (
                                                    <div className="video-slide" key={idx}>
                                                        <video src={src} autoPlay muted playsInline loop
                                                            onClick={() =>
                                                                portfolioInfo(currentCard.id)
                                                            } />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* 右按钮 */}
                                            {currentCard.video && currentCard.video.length > 1 && (
                                                <button
                                                    className="video-nav right"
                                                    onClick={() =>
                                                        setVideoIndex((prev) =>
                                                            prev < currentCard.video!.length - 1 ? prev + 1 : 0
                                                        )
                                                    }
                                                >
                                                    ⇨
                                                </button>
                                            )}
                                        </div>

                                        <div className="description-card">
                                            <h2>{currentCard.title}</h2>
                                            <p className="description">{currentCard.description}</p>
                                        </div>
                                    </div>

                                    {/* 右边列表 */}
                                    <div className="side-list">
                                        {list.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={`side-card ${currentCard.title === item.title ? "active" : ""}`}
                                                onClick={() => {
                                                    handleSelect(list.category, item);
                                                    setVideoIndex(0);
                                                }}
                                            >
                                                <div className="video">
                                                    <img src={item.png} />
                                                </div>
                                                <h3>{item.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                );
            })}
        </section >
    );
};

export default Portfolio;