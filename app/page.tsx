import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-border" />
      </div>
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}
