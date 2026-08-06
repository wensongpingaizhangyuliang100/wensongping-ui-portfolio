import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-4xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        [ 你的头衔 · Available for work ]
      </p>

      <h1 className="mt-6 text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl">
        {"Your Name"}
      </h1>

      <p className="mt-3 text-lg font-medium text-primary md:text-xl">
        {"Product / UI Designer"}
      </p>

      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {"在此填写一句简短的自我介绍，用一到两句话概括你是谁、你专注的设计领域，以及你能为团队带来的价值。"}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button
          size="lg"
          render={<a href="#projects" />}
        >
          查看作品
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={<a href="#contact" />}
        >
          联系我
        </Button>
      </div>
    </section>
  )
}
