import Link from "next/link";
import { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.github || "#"}
      target={project.github ? "_blank" : undefined}
      rel={project.github ? "noopener noreferrer" : undefined}
      className="block"
    >
      <div className="terminal-window hover-card h-full">
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="ml-3 font-mono text-xs text-[#6e7681]">
            {project.id}.tsx
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-mono text-lg font-semibold text-[#c9d1d9] mb-2 group-hover:text-[#39ff14]">
            <span className="text-[#ff7b72]">const</span>{" "}
            <span className="text-[#79c0ff]">{project.title.replace(/\s+/g, "_")}</span>
            <span className="text-[#c9d1d9]"> = </span>
            <span className="text-[#a5d6ff]">{"{"}</span>
          </h3>
          <p className="font-mono text-sm text-[#8b949e] mb-4 pl-4 border-l-2 border-[#30363d]">
            {/* {project.description} */}
            <span className="text-[#7ee787]">/* {project.description} */</span>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-[#161b22] text-[#8b949e] rounded border border-[#30363d]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="font-mono text-xs text-[#a5d6ff]">{"}"}</div>
        </div>
      </div>
    </Link>
  );
}
