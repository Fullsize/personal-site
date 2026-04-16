"use client";

import { skills } from "@/data";

const categoryColors: Record<string, string> = {
  frontend: "#39ff14",
  visualization: "#00f5ff",
  backend: "#ff9f43",
  tools: "#bf5af2",
};

const categoryLabels: Record<string, string> = {
  frontend: "前端框架",
  visualization: "数据可视化",
  backend: "后端技术",
  tools: "开发工具",
};

export default function SkillChart() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="font-mono text-sm text-[#8b949e] mb-3">
            {/* {categoryLabels[category]} */}
            <span style={{ color: categoryColors[category] }}>#</span> {categoryLabels[category]}
          </h3>
          <div className="space-y-3">
            {categorySkills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-1 font-mono text-sm">
                  <span className="text-[#c9d1d9] group-hover:text-[#39ff14] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[#6e7681]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#161b22] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full skill-bar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: categoryColors[skill.category],
                      boxShadow: `0 0 10px ${categoryColors[skill.category]}40`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
