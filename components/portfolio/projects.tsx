import { ImageIcon } from "lucide-react"

function ProjectCard({ index }: { index: number }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
      {/* 图片占位符 */}
      <div className="flex aspect-[4/3] items-center justify-center bg-secondary text-muted-foreground/50">
        <div className="flex flex-col items-center gap-2">
          <ImageIcon className="size-8" aria-hidden="true" />
          <span className="font-mono text-xs">项目图片占位</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-mono text-xs text-muted-foreground">
          {`0${index + 1}`}
        </span>
        <h3 className="text-lg font-medium tracking-tight">项目标题</h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {"在此简要描述该项目：你的角色、面对的挑战与最终成果。"}
        </p>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">精选作品</h2>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Selected work
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProjectCard key={i} index={i} />
        ))}
      </div>
    </section>
  )
}
