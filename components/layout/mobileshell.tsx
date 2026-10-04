type MobileShellProps = {
  children: React.ReactNode
}

export default function MobileShell({
  children,
}: MobileShellProps) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[430px] overflow-x-hidden bg-[var(--background)]">
      {children}
    </div>
  )
}