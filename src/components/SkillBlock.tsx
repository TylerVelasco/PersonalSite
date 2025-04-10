import React from "react";

interface SkillBlockProps {
  background: string;
  hoverBackground: string;
  textColor: string;
  title: string;
  years: React.ReactNode;
}

export default function SkillBlock({ background, hoverBackground, textColor, title, years }: SkillBlockProps) {
  return (
    <div
      className={`group relative p-4 rounded-lg shadow-lg transition`}
      style={{ backgroundColor: background }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-3xl font-semibold opacity-0 group-hover:opacity-100 transition"
        style={{ color: textColor, backgroundColor: hoverBackground }}
      >
        {years}
      </div>
      <div className="flex items-center text-3xl" style={{ color: textColor }}>
        {title}
      </div>
    </div>
  );
}
