type SiteShellProps = {
  children: React.ReactNode
}

export default function SiteShell({
  children,
}: SiteShellProps) {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[var(--background)]">
      <div className="mx-auto w-full max-w-[1440px]">
        {children}
      </div>
    </div>
  )
}