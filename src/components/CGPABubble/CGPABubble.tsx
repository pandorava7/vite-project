import React from "react";
import "./CGPABubble.css";

type Props = {
    value: number;   // 当前 CGPA
    max?: number;    // 满分，默认 4.0
    size?: number;   // 球体直径（px）
};

const CGPABubble: React.FC<Props> = ({ value, max = 4, size = 140 }) => {
    const pct = Math.max(0, Math.min(100, (value / max) * 100)); // 水位百分比
    return (
        <div
            className="cgpa-bubble"
            style={
                {
                    // @ts-ignore: CSS variable
                    "--size": `${size}px`,
                    "--fill": `${pct}%`,
                }
            }
        >
            <div className="water-line" />
            <div className="water" />

            <div className="cgpa-text">
                <span className="cgpa-label">CGPA</span>
                <p className="cgpa-value">
                    {value.toFixed(1)} / {max.toFixed(1)}
                </p>
            </div>
        </div>
    );
};

export default CGPABubble;
