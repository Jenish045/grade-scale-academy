import React from "react"
import { cn } from "@/lib/utils"

interface HomePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  aspectRatio?: string
}

export function HomePlaceholder({ label, className, aspectRatio = "aspect-video", ...props }: HomePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[24px] bg-rhythm border border-[rgba(15,23,42,0.08)] flex flex-col justify-between p-6",
        aspectRatio,
        className
      )}
      {...props}
    >
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Diagonal construction lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: "var(--foreground)" }}>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.05]" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.05]" />
      </svg>

      {/* Faded GSA Watermark in Playfair Display (Serif) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-8xl md:text-9xl font-semibold text-foreground/[0.02]">
          GSA
        </span>
      </div>

      {/* Mock Header Window Buttons */}
      <div className="flex items-center gap-1.5 z-10 pointer-events-none">
        <span className="size-2 rounded-full bg-foreground/10" />
        <span className="size-2 rounded-full bg-foreground/10" />
        <span className="size-2 rounded-full bg-foreground/10" />
      </div>

      {/* Small Label */}
      <div className="z-10 mt-auto pointer-events-none">
        <span className="text-[10px] tracking-[0.15em] font-bold text-foreground/35 uppercase block">
          {label}
        </span>
      </div>
    </div>
  )
}
