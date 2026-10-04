import { Menu, Search, ShoppingBag } from "lucide-react"
import BrandLogo from "../ui/BrandLogo"

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-4 md:px-8 lg:px-12 lg:py-5">
      <BrandLogo />

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-8 lg:flex">
        <a href="/" className="text-sm font-medium">
          Home
        </a>

        <a href="/shop" className="text-sm font-medium">
          Shop
        </a>

        <a href="/story" className="text-sm font-medium">
          Our Story
        </a>

        <a href="/rituals" className="text-sm font-medium">
          Rituals
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <button
          aria-label="Search"
          className="flex size-11 items-center justify-center rounded-full border border-[#E8DFD3] bg-[#FFFDF8] transition active:scale-95"
        >
          <Search size={20} strokeWidth={1.6} />
        </button>

        <button
          aria-label="Cart"
          className="relative flex size-11 items-center justify-center rounded-full border border-[#E8DFD3] bg-[#FFFDF8] transition active:scale-95"
        >
          <ShoppingBag size={20} strokeWidth={1.6} />

          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#C96B3C]" />
        </button>

        <button
          aria-label="Menu"
          className="flex size-11 items-center justify-center lg:hidden"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}