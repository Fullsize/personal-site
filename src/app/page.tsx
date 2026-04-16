import Image from "next/image";
import Link from "next/link";
import TerminalBlock from "@/components/TerminalBlock";
import ProjectCard from "@/components/ProjectCard";
import SkillChart from "@/components/SkillChart";
import { profile, projects } from "@/data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Terminal Intro */}
            <div className="space-y-6">
              <TerminalBlock title="intro.sh">
                <div className="space-y-2">
                  <div className="text-[#6e7681]">
                    <span className="text-[#ff7b72]">$</span> whoami
                  </div>
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">name:</span> {profile.name} ({profile.alias})
                  </div>
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">title:</span> {profile.title}
                  </div>
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">location:</span> {profile.location}
                  </div>
                  <div className="mt-4 text-[#6e7681]">
                    <span className="text-[#ff7b72]">$</span> cat bio.txt
                  </div>
                  {profile.bio.map((line, i) => (
                    <div key={i} className="text-[#7ee787]">{line}</div>
                  ))}
                </div>
              </TerminalBlock>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="terminal-window p-4 text-center">
                  <div className="font-mono text-2xl text-[#39ff14]">{profile.stats.repos}</div>
                  <div className="font-mono text-xs text-[#6e7681]">repos</div>
                </div>
                <div className="terminal-window p-4 text-center">
                  <div className="font-mono text-2xl text-[#00f5ff]">{profile.stats.stars}</div>
                  <div className="font-mono text-xs text-[#6e7681]">stars</div>
                </div>
                <div className="terminal-window p-4 text-center">
                  <div className="font-mono text-2xl text-[#ff9f43]">{profile.stats.followers}</div>
                  <div className="font-mono text-xs text-[#6e7681]">followers</div>
                </div>
              </div>
            </div>

            {/* Right: Avatar & Links */}
            <div className="flex flex-col items-center md:items-end space-y-6">
              <div className="relative">
                <div className="w-48 h-48 rounded-full border-2 border-[#39ff14] p-1 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={192}
                    height={192}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1 font-mono text-xs text-[#39ff14]">
                  <span className="animate-pulse">● </span>
                  Available
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Fullsize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#30363d] rounded-lg hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:contact@fullsize.online"
                  className="p-3 border border-[#30363d] rounded-lg hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a
                  href="https://fullsize.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#30363d] rounded-lg hover:border-[#bf5af2] hover:text-[#bf5af2] transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#30363d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-2xl mb-8">
            <span className="text-[#ff7b72]">const</span>{" "}
            <span className="text-[#79c0ff]">skills</span>
            <span className="text-[#c9d1d9]"> = </span>
            <span className="text-[#a5d6ff]">{"["}</span>
          </h2>
          <div className="pl-4">
            <SkillChart />
          </div>
          <h2 className="font-mono text-2xl mt-8">
            <span className="text-[#a5d6ff]">{"]"}</span>
            <span className="text-[#c9d1d9]">;</span>
          </h2>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#30363d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-2xl mb-8">
            <span className="text-[#ff7b72]">export</span>{" "}
            <span className="text-[#79c0ff]">featuredProjects</span>
            <span className="text-[#c9d1d9]"> = </span>
            <span className="text-[#a5d6ff]">{"["}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 pl-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-block font-mono text-sm px-6 py-3 border border-[#30363d] rounded-md hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
            >
              view_all_projects() →
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#30363d]">
        <div className="max-w-3xl mx-auto">
          <TerminalBlock title="philosophy.ts">
            <div className="space-y-2">
              <div className="text-[#6e7681]">// Code philosophy</div>
              <div className="text-[#ff7b72]">const</div>
              <div className="pl-4">
                <span className="text-[#79c0ff]">motto</span>
                <span className="text-[#c9d1d9]"> = </span>
                <span className="text-[#a5d6ff]">&quot;Never never never give up&quot;</span>
                <span className="text-[#c9d1d9]">;</span>
              </div>
              <div className="pl-4">
                <span className="text-[#79c0ff]">codeStyle</span>
                <span className="text-[#c9d1d9]"> = </span>
                <span className="text-[#a5d6ff]">&quot;Clean code first, cleverness second&quot;</span>
                <span className="text-[#c9d1d9]">;</span>
              </div>
              <div className="mt-4 text-[#6e7681]">// Favorite quote</div>
              <div className="text-[#7ee787]">
                &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
              </div>
            </div>
          </TerminalBlock>
        </div>
      </section>
    </div>
  );
}
