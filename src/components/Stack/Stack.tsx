import React from "react";

type StackProps = {
  children: React.ReactNode;
  gap?: string | number;      // 元素间距
  align?: "start" | "center" | "end" | "stretch"; // 垂直方向对齐
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"; // 水平方向对齐
  style?: React.CSSProperties;
  className?: string;
};

// 映射 justify-content 的值
const justifyMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

// HStack: 横向排列
export const HStack: React.FC<StackProps> = ({
  children,
  gap = "0px",
  align = "center",
  justify = "start",
  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: align,
        justifyContent: justifyMap[justify],
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// VStack: 纵向排列
export const VStack: React.FC<StackProps> = ({
  children,
  gap = "0px",
  align = "start",
  justify = "start",
  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        justifyContent: justifyMap[justify],
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
