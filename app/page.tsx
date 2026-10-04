import MobileShell from "@/components/layout/mobileshell"

export default function Home() {
  return (
    <MobileShell>
      <main className="px-4 py-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--brown)]">
          AYURVEDIC
        </p>

        <h1 className="mt-2 text-4xl font-semibold">
          Root & Ritual
        </h1>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Website foundation ready.
        </p>
      </main>
    </MobileShell>
  )
}