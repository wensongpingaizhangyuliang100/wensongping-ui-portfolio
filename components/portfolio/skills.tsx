const skills = [
  "技能标签",
  "技能标签",
  "技能标签",
  "技能标签",
  "技能标签",
  "技能标签",
  "技能标签",
  "技能标签",
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:pt-2">
          技能
        </h2>

        <ul className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
