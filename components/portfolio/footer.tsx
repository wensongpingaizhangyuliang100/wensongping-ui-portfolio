import { Mail, Link as LinkIcon, Globe } from "lucide-react"

const contacts = [
  { label: "your@email.com", href: "mailto:your@email.com", icon: Mail },
  { label: "LinkedIn", href: "#", icon: LinkIcon },
  { label: "作品集网站", href: "#", icon: Globe },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          联系方式
        </p>

        <h2 className="mt-4 text-balance text-2xl font-medium tracking-tight md:text-4xl">
          让我们一起创造点什么。
        </h2>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {contacts.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Your Name. 保留所有权利。`}
        </p>
      </div>
    </footer>
  )
}
