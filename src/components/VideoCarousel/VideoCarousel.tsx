import React, { useState } from "react";
import "./VideoCarousel.css";

interface VideoCarouselProps {
  videoList: string[];           // 视频列表
  autoPlay?: boolean;            // 是否自动播放
  loop?: boolean;                // 是否循环
  muted?: boolean;               // 是否静音
  controls?: boolean
  onVideoClick?: () => void;     // 点击视频时触发
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videoList,
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  onVideoClick,
}) => {
  const [videoIndex, setVideoIndex] = useState(0);

  if (!videoList || videoList.length === 0) return null;

  return (
    <div className="video-carousel">
      {/* 左按钮 */}
      {videoList.length > 1 && (
        <button
          className="video-nav left"
          onClick={() =>
            setVideoIndex((prev) =>
              prev > 0 ? prev - 1 : videoList.length - 1
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
        {videoList.map((src, idx) => (
          <div className="video-slide" key={idx}>
            <video
              src={src}
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              controls={controls}
              playsInline
              onClick={onVideoClick}
            />
          </div>
        ))}
      </div>

      {/* 右按钮 */}
      {videoList.length > 1 && (
        <button
          className="video-nav right"
          onClick={() =>
            setVideoIndex((prev) =>
              prev < videoList.length - 1 ? prev + 1 : 0
            )
          }
        >
          ⇨
        </button>
      )}
    </div>
  );
};

export default VideoCarousel;
