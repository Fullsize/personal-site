import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#30363d] bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-[#8b949e]">
            <span className="text-[#39ff14]">&gt;_</span> {profile.name} © {new Date().getFullYear()}
          </div>
          <div className="font-mono text-xs text-[#6e7681]">
            Built with Next.js + TailwindCSS • Deployed on Cloudflare
          </div>
        </div>
      </div>
    </footer>
  );
}
