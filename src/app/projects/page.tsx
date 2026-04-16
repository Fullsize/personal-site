import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export const metadata: Metadata = {
  title: "Projects | Fullsize",
  description: "Featured projects and works by Fullsize",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="font-mono text-3xl mb-4">
            <span className="text-[#ff7b72]">import</span>{" "}
            <span className="text-[#a5d6ff]">{"{ projects }"}</span>{" "}
            <span className="text-[#ff7b72]">from</span>{" "}
            <span className="text-[#a5d6ff]">&quot;@/portfolio&quot;</span>
            <span className="text-[#c9d1d9]">;</span>
          </h1>
          <p className="font-mono text-[#8b949e]">
            {/* A collection of projects I&apos;ve built and contributed to. */}
            <span className="text-[#7ee787]">// A collection of projects I&apos;ve built and contributed to</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-3 font-mono text-xs text-[#6e7681]">more.ts</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-[#8b949e]">
              <span className="text-[#6e7681]">// Looking for more?</span>
            </p>
            <p className="mt-2">
              <span className="text-[#ff7b72]">const</span>{" "}
              <span className="text-[#79c0ff]">githubUrl</span>
              <span className="text-[#c9d1d9]"> = </span>
              <span className="text-[#a5d6ff]">&quot;https://github.com/Fullsize&quot;</span>
              <span className="text-[#c9d1d9]">;</span>
            </p>
            <a
              href="https://github.com/Fullsize?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
            >
              view_all_repositories() →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
