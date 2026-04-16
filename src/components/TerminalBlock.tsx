interface TerminalBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalBlock({
  title = "terminal",
  children,
  className = "",
}: TerminalBlockProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="ml-3 font-mono text-xs text-[#6e7681]">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
