import { Metadata } from "next";
import Image from "next/image";
import TerminalBlock from "@/components/TerminalBlock";
import SkillChart from "@/components/SkillChart";
import { profile, skills } from "@/data";

export const metadata: Metadata = {
  title: "About | Fullsize",
  description: "Learn more about Fullsize - Frontend Developer & Data Visualization Expert",
};

const experiences = [
  {
    period: "2022 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    description: "Building scalable frontend applications with React and data visualization solutions",
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Startup",
    description: "Developed interactive dashboards and real-time data visualization features",
  },
];

const interests = [
  "D3.js & Three.js 3D Visualization",
  "AI/ML Integration (TensorFlow.js)",
  "WebGL Interactive Experiences",
  "PWA Architecture",
  "Core Web Vitals Optimization",
  "Web3 Blockchain Integration",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-mono text-3xl mb-4">
            <span className="text-[#ff7b72]">interface</span>{" "}
            <span className="text-[#79c0ff]">Developer</span>{" "}
            <span className="text-[#a5d6ff]">{"{"}</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <TerminalBlock title="about.ts">
              <div className="space-y-4">
                <div className="text-[#79c0ff]">name: <span className="text-[#a5d6ff]">&quot;{profile.name}&quot;</span>,</div>
                <div className="text-[#79c0ff]">alias: <span className="text-[#a5d6ff]">&quot;{profile.alias}&quot;</span>,</div>
                <div className="text-[#79c0ff]">title: <span className="text-[#a5d6ff]">&quot;{profile.title}&quot;</span>,</div>
                <div className="text-[#79c0ff]">location: <span className="text-[#a5d6ff]">&quot;{profile.location}&quot;</span>,</div>
                <div className="text-[#79c0ff]">focus: <span className="text-[#a5d6ff]">[&quot;Frontend&quot;, &quot;Data Visualization&quot;]</span>,</div>
              </div>
            </TerminalBlock>

            {/* Bio */}
            <TerminalBlock title="philosophy.ts">
              <div className="space-y-3">
                <div className="text-[#6e7681]">// What I believe</div>
                <div className="text-[#7ee787]">
                  <span className="text-[#ff7b72]">const</span> philosophy = {"{"}
                </div>
                <div className="pl-4 space-y-2">
                  <div className="text-[#79c0ff]">codeStyle: <span className="text-[#a5d6ff]">&quot;Clean code first, cleverness second&quot;</span>,</div>
                  <div className="text-[#79c0ff]">motto: <span className="text-[#a5d6ff]">&quot;Never never never give up&quot;</span>,</div>
                  <div className="text-[#79c0ff]">approach: <span className="text-[#a5d6ff]">&quot;Build for users, optimize for performance&quot;</span>,</div>
                </div>
                <div className="text-[#7ee787]">{"}"};</div>
              </div>
            </TerminalBlock>

            {/* Experience */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-3 font-mono text-xs text-[#6e7681]">experience.json</span>
              </div>
              <div className="p-4">
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <div key={i} className="border-l-2 border-[#30363d] pl-4">
                      <div className="font-mono text-xs text-[#6e7681]">{exp.period}</div>
                      <div className="font-mono text-lg text-[#79c0ff]">{exp.role}</div>
                      <div className="font-mono text-sm text-[#8b949e]">@ {exp.company}</div>
                      <div className="font-mono text-sm text-[#c9d1d9] mt-2">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <TerminalBlock title="interests.ts">
              <div className="space-y-2">
                <div className="text-[#ff7b72]">const</div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">interests</span>
                  <span className="text-[#c9d1d9]">: <span className="text-[#a5d6ff]">string[]</span> = [</span>
                </div>
                <div className="pl-8 space-y-1">
                  {interests.map((interest, i) => (
                    <div key={i} className="text-[#a5d6ff]">
                      &quot;{interest}&quot;{i < interests.length - 1 ? "," : ""}
                    </div>
                  ))}
                </div>
                <div className="text-[#c9d1d9]">];</div>
              </div>
            </TerminalBlock>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Avatar */}
            <div className="terminal-window p-6 text-center">
              <div className="relative inline-block">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-[#39ff14]"
                />
              </div>
              <div className="mt-4 font-mono text-lg text-[#c9d1d9]">{profile.name}</div>
              <div className="font-mono text-sm text-[#8b949e]">{profile.alias}</div>
              <div className="mt-4 flex justify-center gap-4 font-mono text-xs">
                <div>
                  <div className="text-[#39ff14]">{profile.stats.repos}</div>
                  <div className="text-[#6e7681]">repos</div>
                </div>
                <div>
                  <div className="text-[#00f5ff]">{profile.stats.stars}</div>
                  <div className="text-[#6e7681]">stars</div>
                </div>
                <div>
                  <div className="text-[#ff9f43]">{profile.stats.followers}</div>
                  <div className="text-[#6e7681]">followers</div>
                </div>
              </div>
            </div>

            {/* Quick Skills */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-3 font-mono text-xs text-[#6e7681]">tech-stack.ts</span>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2 py-1 text-xs font-mono bg-[#161b22] text-[#c9d1d9] rounded border border-[#30363d] hover:border-[#39ff14] transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-xs font-mono text-[#6e7681]">
                    +{skills.length - 8} more
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-3 font-mono text-xs text-[#6e7681]">contact.ts</span>
              </div>
              <div className="p-4 space-y-3 font-mono text-sm">
                <a
                  href="https://github.com/Fullsize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#c9d1d9] hover:text-[#39ff14] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  github.com/Fullsize
                </a>
                <a
                  href="mailto:contact@fullsize.online"
                  className="flex items-center gap-2 text-[#c9d1d9] hover:text-[#00f5ff] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  contact@fullsize.online
                </a>
                <a
                  href="https://fullsize.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#c9d1d9] hover:text-[#bf5af2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  fullsize.online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing brace */}
        <div className="mt-12 font-mono text-3xl text-[#a5d6ff]">{"}"}</div>
      </div>
    </div>
  );
}
