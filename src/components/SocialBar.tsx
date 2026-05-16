export function SocialBar() {
  return (
    <div className="fixed left-8 bottom-12 z-[200] hidden lg:flex flex-col gap-6 items-center">
      <a
        href="https://www.linkedin.com/in/aniketmaurya1702/"
        target="_blank"
        rel="noreferrer"
        className="font-mono text-[0.7rem] tracking-wider text-muted no-underline transition-colors hover:text-accent"
        style={{ writingMode: 'vertical-rl' }}
      >
        linkedin
      </a>
      <a
        href="mailto:aniketmaurya1702@gmail.com"
        className="font-mono text-[0.7rem] tracking-wider text-muted no-underline transition-colors hover:text-accent"
        style={{ writingMode: 'vertical-rl' }}
      >
        email
      </a>
      <div
        className="w-px mt-2"
        style={{ height: '60px', background: 'linear-gradient(transparent, var(--accent))' }}
      />
    </div>
  )
}
