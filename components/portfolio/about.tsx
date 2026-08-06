export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:pt-2">
          关于我
        </h2>

        <div className="space-y-5 text-pretty leading-relaxed text-foreground/90">
          <p className="text-muted-foreground">
            {"在这里介绍你的设计理念、经历与专长。描述你如何思考产品、如何与团队协作，以及你最擅长解决的问题类型。"}
          </p>
          <p className="text-muted-foreground">
            {"第二段可以补充你的工作方式、使用的工具，或你对好设计的定义。保持简洁、真诚。"}
          </p>
        </div>
      </div>
    </section>
  )
}
